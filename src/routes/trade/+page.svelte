<script lang="ts">
  import type { PageData } from "../$types";

  export let data: PageData;

  let symbol: string;
  let { stonks } = data;
  let counter: number = 0;
  let balance: number = 100000.0;
  $: {
    stonks, balance;
  }
  for (const stonk in stonks) {
    console.log(stonks[counter]);
    if (String(stonks[counter].transaction_is_buy).toLowerCase() === "true") {
      balance -=
        Number(stonks[counter].transaction_amount) *
        Number(stonks[counter].transaction_price_per_stock);
      counter += 1;
    } else {
      balance +=
        Number(stonks[counter].transaction_amount) *
        Number(stonks[counter].transaction_price_per_stock);
      counter += 1;
    }
  }
</script>

<h2 style="font-size:50px">Current Portfolio</h2>
<div>
  Balance : {balance.toFixed(2)} USD
  <form action="?/clear" method="POST">
    <button type="submit">Restart</button>
  </form>
</div>

<div class="elative overflow-x-auto shadow-md sm:rounded-lg">
  <table
    class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
  >
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th>DATE & TIME</th>
        <th>SYMBOL</th>
        <th>SHARES</th>
        <th>BOUGHT/SOLD AT (USD)</th>
        <th>TOTAL VALUE (USD)</th>
      </tr>
    </thead>
    <tbody>
      {#each stonks as stonk}
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >{stonk.transaction_datetime.slice(0, 19)}
          </th>
          <td> ${stonk.transaction_symbol} </td>
          <td> {stonk.transaction_amount} </td>
          <td>
            {#if String(stonk.transaction_is_buy) === "true"}
              <div class="text-red-500">
                {stonk.transaction_price_per_stock}
              </div>
            {:else}
              <div class="text-green-500">
                {stonk.transaction_price_per_stock}
              </div>
            {/if}</td
          >
          <td class="font-bold">
            {Number(
              stonk.transaction_price_per_stock * stonk.transaction_amount
            ).toFixed(2)}
          </td>
        </tr>
      {/each}

      <tr>
        <th colspan="3"> PORTFOLIO TOTAL (USD) </th>
        <td> {balance.toFixed(2)} USD</td>
      </tr>
    </tbody>
  </table>
  <div>
    Symbol : <input
      type="text"
      class="text-black"
      name="symbol"
      bind:value={symbol}
    />
    <a href="/trade/lookup?symbol={symbol}"><button>Lookup</button></a>
  </div>
</div>
