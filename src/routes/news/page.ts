import { supabase } from "../../main";

export async function fetchNews() {
    const { data, error } = await supabase.from('news').select('*');
    if (error) {
        console.error('Error fetching news:', error.message);
        return [];
    } else {
        return data;
    }
}

export async function filterNews(type: string) {
    if (type === 'All') {
        return await fetchNews(); 
    } else {
        const { data, error } = await supabase.from('news').select('*').eq('type', type);
        if (error) {
            console.error('Error fetching news:', error.message);
            return [];
        } else {
            return data;
        }
    }
}