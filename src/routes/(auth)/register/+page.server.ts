import { fail } from "@sveltejs/kit";
import type { Actions } from "../$types";

export const actions: Actions = {
    register: async ({ request, locals: { supabase, safeGetSession } }) => {
        const formData = await request.formData()
        const userEmail = formData.get('userEmail') as string
        const userPassword = formData.get('userPassword') as string
        const userPhone = formData.get('userPhone') as string
        const userName = formData.get('userName') as string

        const { data, error } = await supabase.auth.signUp(
            {
                email: userEmail,
                password: userPassword,
                options: {
                    data: {
                        phone_number: userPhone,
                        username: userName,
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