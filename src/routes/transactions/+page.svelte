<script>
  import TransactionHistory from "$lib/components/TransactionHistory.svelte";
  import amazon_icon from "$lib/images/amazon.jpg";
  import BalanceGraph from "$lib/components/BalanceGraph.svelte";

  export let data;
  let { transactions } = data;
</script>

<svelte:head>
  <title>Transactions</title>
</svelte:head>

<div>
  <div>
    <div>
      <h2 class="my-2 text-3xl font-bold">Transactions</h2>
    </div>
    <div
      class="flex flex-1 flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 mx-1"
    >
      <BalanceGraph />
    </div>

    <div class="p-4">
      <h3 class="text-lg">History</h3>
      {#each transactions as transaction}
        <TransactionHistory
          icon={amazon_icon}
          title="Amazon"
          date={transaction.transaction_datetime}
          amount={transaction.transaction_amount}
        />{/each}
    </div>
  </div>
</div>
