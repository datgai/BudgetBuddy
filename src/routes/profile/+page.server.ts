import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()

    if (!session) {
        throw redirect(303, '/login')
    }
    const { data: profile } = await supabase
        .from('profiles')
        .select(`username, phone_number,avatar_url`)
        .eq('id', session.user.id)
        .single()
    return { session, profile }
}

export const actions: Actions = {
    update: async ({ request, locals: { supabase, safeGetSession } }) => {
        const formData = await request.formData()
        const username = formData.get('username') as string
        const phoneNumber = formData.get('phoneNumber') as string
        const avatarUrl = formData.get('avatarUrl') as string

        const { session } = await safeGetSession()

        const { error } = await supabase.from('profiles').upsert({
            id: session?.user.id,
            username,
            phoneNumber,
            avatar_url: avatarUrl,
            updated_at: new Date(),
        })

        if (error) {
            return fail(500, {
                username,
                phoneNumber,
                avatarUrl,
            })
        }

        return {
            username,
            phoneNumber,
            avatarUrl,
        }
    },
    signout: async ({ locals: { supabase, safeGetSession } }) => {
        const { session } = await safeGetSession()
        if (session) {
            await supabase.auth.signOut()
            throw redirect(303, '/')
        }
    },
}
