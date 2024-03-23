<script>
  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import Overview from "$lib/components/Overview.svelte";
  import TransactionHistory from "$lib/components/TransactionHistory.svelte";
  import expenses_graph from "$lib/images/expenses.png";
  import amazon_icon from "$lib/images/amazon.jpg";
</script>

<svelte:head>
  <title>Transactions</title>
</svelte:head>

<div>
  <div>
    <MobileHeader />
    <div>
      <h2 class="my-2 text-3xl font-bold">Transactions</h2>
    </div>

    <Overview
      graphSrc={expenses_graph}
      message="Your spending decreased from 5% the last week. Good job!"
    />

    <div class="p-4">
      <h3 class="text-lg">History</h3>

      <TransactionHistory
        icon={amazon_icon}
        title="Amazon"
        date="May 24, 2022"
        amount="- RM103.56"
      />
      <TransactionHistory
        icon={amazon_icon}
        title="Amazon"
        date="May 22, 2022"
        amount="- RM13.56"
      />
      <TransactionHistory
        icon={amazon_icon}
        title="Amazon"
        date="May 21, 2022"
        amount="- RM13.56"
      />
      <TransactionHistory
        icon={amazon_icon}
        title="Amazon"
        date="May 14, 2022"
        amount="- RM13.56"
      />
    </div>
  </div>
</div>
