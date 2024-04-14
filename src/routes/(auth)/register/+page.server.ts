import { fail } from "@sveltejs/kit";
import type { Actions } from "../$types";
import { supabase } from "../../../main";

export const actions: Actions = {
    register: async ({ request, locals: { supabase, safeGetSession } }) => {
        const formData = await request.formData();
        const userEmail = formData.get('userEmail') as string;
        const userPassword = formData.get('userPassword') as string;
        const userPhone = formData.get('userPhone') as string;
        const userName = formData.get('userName') as string;
        const avatarUrl = formData.get('avatarUrl') as string;

        const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
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
            }
        );

        if (signUpError) {
            console.log(signUpError);
            return fail(500, { data: signUpData });
        }

        const { session } = await safeGetSession();
        console.log(session);

        // for (let i = 1; i <= 9; i++) {
        //     await supabase
        //         .from("tasks")
        //         .insert([{ taskId: i, taskuser: session?.user.id, isCompleted: false }]);
        // }

        return { data: signUpData };
    }
};
