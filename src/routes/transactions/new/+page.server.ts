import { fail, redirect, type Actions } from '@sveltejs/kit'

export const actions: Actions = {
    transactionNew: async ({ request, locals: { supabase, safeGetSession } }) => {
        const { session } = await safeGetSession()
        const formData = await request.formData()
        const transactionDateTime = formData.get('transactionDateTime')
        const transactionIsIncome = Boolean(formData.get('transactionType')) as boolean
        const transactionCategory = formData.get('transactionCategory') as string
        const transactionAmount = Number(formData.get('transactionAmount')).toFixed(2)
        const transactionUser = session?.user.id

        const { error } = await supabase.from('transactions').insert({
            transaction_datetime: transactionDateTime,
            transaction_is_income: transactionIsIncome,
            transaction_category: transactionCategory,
            transaction_amount: transactionAmount,
            transaction_user: transactionUser
        })
        if (error) {
            console.log(error)
            // return fail(Number(error.code), error)
        }
        throw redirect(303, '/transactions')
    }

}