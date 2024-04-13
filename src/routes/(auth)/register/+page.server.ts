import { fail } from "@sveltejs/kit";
import type { Actions } from "../$types";

export const actions: Actions = {
    register: async ({ request, locals: { supabase, safeGetSession } }) => {
        const { session } = await safeGetSession()
        const formData = await request.formData()
        const userEmail = formData.get('userEmail') as string
        const userPassword = formData.get('userPassword') as string
        const userPhone = formData.get('userPhone') as string
        const userName = formData.get('userName') as string
        const avatarUrl = formData.get('avatarUrl') as string

        const { data, error } = await supabase.auth.signUp(
            {
                email: userEmail,
                password: userPassword,
                options: {
                    data: {
                        phone_number: userPhone,
                        username: userName,
                        avatar_url: avatarUrl
                    }
                }
            })
        if (error) {
            return fail(500, {
                data
            })
        }

        return {
            data
        }

    }
}