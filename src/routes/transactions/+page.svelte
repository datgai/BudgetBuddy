<script>
  import TransactionHistory from "$lib/components/TransactionHistory.svelte";
  import amazon_icon from "$lib/images/amazon.jpg";
  import BalanceGraph from "$lib/components/BalanceGraph.svelte";

  export let data;
  let { profile, transactions } = data;
</script>

<svelte:head>
  <title>Transactions</title>
</svelte:head>

<div>
  <div>
    <div>
      <h2 class="my-2 text-3xl font-bold">
        {profile?.username}'s Transactions
      </h2>
    </div>
    <div
      class="flex flex-1 flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 mx-1"
    >
      <BalanceGraph />
    </div>

    <div class="p-4">
      <h3 class="text-lg">History</h3>
      {#if transactions && transactions.length > 0}
        {#each transactions as transaction}
          <TransactionHistory
            id={transaction.id}
            icon={amazon_icon}
            category={transaction.transaction_category}
            isIncome={transaction.transaction_is_income}
            title={transaction.transaction_description}
            date={transaction.transaction_datetime}
            amount={Number(transaction.transaction_amount).toFixed(2)}
          />{/each}
      {:else}
        <p>
          Oh no! looks like your records empty! go and <a
            href="/transactions/new">record a transaction now!</a
          >
        </p>
      {/if}
    </div>
  </div>
</div>
