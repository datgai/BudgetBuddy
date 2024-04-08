import { supabase } from "../../main";

export async function fetchForums() {
    const { data, error } = await supabase.from('forums').select('*');
    if (error) {
        console.error('Error fetching forums:', error.message);
        return [];
    } else {
        return data;
    }
}