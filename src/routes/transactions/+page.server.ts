import { fail, redirect, type Actions } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    const { data: transactions, error } = await supabase
        .from('transactions')
        .select('id,transaction_datetime,transaction_is_income,transaction_category,transaction_amount,transaction_description')
        .eq('transaction_user', session?.user.id)

    if (error) {
        return fail(Number(error.code), error)
    }
    return { transactions }
}

export const actions: Actions = {
    transactionDelete: async ({ request, locals: { supabase } }) => {
        const formData = await request.formData()
        const { error } = await supabase.from('transactions').delete().eq('id', formData.get('transactionId'))
        if (error) {
            return fail(400, error)
        }
        throw redirect(303, '/transactions')

    }
}