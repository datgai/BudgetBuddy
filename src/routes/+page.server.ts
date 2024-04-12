import { fail, redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are zero-indexed

const startOfMonth = new Date(year, month - 1, 1);
const endOfMonth = new Date(year, month, 0); // Note: Date(year, month, 0) gives the last day of the previous month


export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()

    if (!session) {
        throw redirect(303, '/login')
    }

    const { data: transactions, error } = await supabase
        .from('transactions')
        .select('id,transaction_datetime,transaction_is_income,transaction_category,transaction_amount,transaction_description')
        .eq('transaction_user', session?.user.id)
        .gte('transaction_datetime', startOfMonth.toISOString()) // Greater than or equal to start of month
        .lte('transaction_datetime', endOfMonth.toISOString()) // Less than or equal to end of month

        .order('transaction_datetime', { ascending: false })

    if (error) {
        return fail(400, error)
    }

    if (transactions) {
        let balance: number = 0
        let balanceHistory: number[] = [];
        let incomeHistory: number[] = [];
        let incomeTotal: number = 0;
        let expenseHistory: number[] = [];
        let expenseTotal: number = 0;
        let categoryTotals: { [category: string]: number } = {
            paycheck: 0,
            investments: 0,
            savings: 0,
            food: 0,
            shopping: 0,
            entertainment: 0,
            rent: 0,
            utilities: 0,
            others: 0
        };
        for (const transaction of transactions) {
            if (transaction.transaction_is_income) {
                balance += transaction.transaction_amount
                incomeTotal += transaction.transaction_amount
                balanceHistory.push(transaction.transaction_amount)
                incomeHistory.push(transaction.transaction_amount)
            }
            else if (!transaction.transaction_is_income) {
                balance -= transaction.transaction_amount
                expenseTotal += transaction.transaction_amount
                balanceHistory.push(transaction.transaction_amount)
                expenseHistory.push(transaction.transaction_amount)
            }
            if (transaction.transaction_category in categoryTotals) {
                categoryTotals[transaction.transaction_category] += transaction.transaction_amount;
            }
        }
        return { balance, balanceHistory, incomeTotal, incomeHistory, expenseTotal, expenseHistory, categoryTotals }
    }
    return {}
}
