import { redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ locals: { safeGetSession }, url }) => {
    const { session } = await safeGetSession()

    if (!session) {
        throw redirect(303, '/login')
    }
    const searchParams = new URLSearchParams(url.search);
    const symbol = searchParams.get('symbol');
    const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + symbol + "&apikey=2CZ1RRNC1PRUGR1H'");
    let stonks = await response.json();
    stonks = {
        'Meta Data': {
            '1. Information': 'Daily Prices (open, high, low, close) and Volumes',
            '2. Symbol': 'IBM',
            '3. Last Refreshed': '2024-04-15',
            '4. Output Size': 'Compact',
            '5. Time Zone': 'US/Eastern'
        },
        'Time Series (Daily)': {
            '2024-04-15': {
                '1. open': '185.5700',
                '2. high': '187.4800',
                '3. low': '180.8800',
                '4. close': '181.2500',
                '5. volume': '3528140'
            },
            '2024-04-12': {
                '1. open': '184.0000',
                '2. high': '185.1699',
                '3. low': '181.6850',
                '4. close': '182.2700',
                '5. volume': '3547378'
            },
        }
    };
    return { symbol, stonks }
}

export const actions: Actions = {
    stonksBuy: async ({ request, locals: { supabase, safeGetSession } }) => {
        const { session } = await safeGetSession()
        const formData = await request.formData()
        const symbol = formData.get('symbol') as string
        const currentStonksPrice = Number(formData.get('currentStonksPrice')).toFixed(2)
        const buyAmount = Number(formData.get('buyAmount'))
        const { data, error } = await supabase
            .from("trading")
            .insert([{ transaction_symbol: symbol, transaction_is_buy: true, transaction_amount: buyAmount, transaction_price_per_stock: currentStonksPrice, transaction_user: session?.user.id }]);
        if (error) {
            console.log(error)
        }
        redirect(300, "/trade")
    },
    stonksSell: async ({ request, locals: { supabase, safeGetSession } }) => {
        const { session } = await safeGetSession()
        const formData = await request.formData()
        const symbol = formData.get('symbol') as string
        const currentStonksPrice = Number(formData.get('currentStonksPrice')).toFixed(2)
        const sellAmount = Number(formData.get('sellAmount'))
        const { data, error } = await supabase
            .from("trading")
            .insert([{ transaction_symbol: symbol, transaction_is_buy: false, transaction_amount: sellAmount, transaction_price_per_stock: currentStonksPrice, transaction_user: session?.user.id }]);
        if (error) {
            console.log(error)
        }
        redirect(300, "/trade")
    }
}