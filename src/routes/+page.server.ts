import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
    const { session, user } = await safeGetSession()

    if (!session) {
        throw redirect(303, '/login')
    }

    console.log(user)
    console.log(user.identities.identity_data)
    return { session, user }
}