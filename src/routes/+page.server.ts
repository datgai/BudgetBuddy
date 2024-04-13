import { fail, redirect, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()

    if (!session) {
        throw redirect(303, '/login')
    }

    const { data: transactions, error } = await supabase
        .from('transactions')
        .select('id,transaction_datetime,transaction_is_income,transaction_category,transaction_amount,transaction_description')
        .eq('transaction_user', session?.user.id)
        .order('transaction_datetime', { ascending: true })

    if (error) {
        return fail(400, error)
    }


    return { transactions }
}
