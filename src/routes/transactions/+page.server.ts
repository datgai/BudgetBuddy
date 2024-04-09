import { fail } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    const { data: transactions, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('transaction_user', session?.user.id)

    if (error) {
        return fail(Number(error.code), error)
    }
    return { transactions }
}