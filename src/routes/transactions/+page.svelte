<script>
  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import Overview from "$lib/components/Overview.svelte";
  import TransactionHistory from "$lib/components/TransactionHistory.svelte";
  import expenses_graph from "$lib/images/expenses.png";
  import amazon_icon from "$lib/images/amazon.jpg";
  import BalanceGraph from "$lib/components/BalanceGraph.svelte";
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
    <div
      class="flex flex-1 flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 mx-1"
    >
      <BalanceGraph />
    </div>

    <div class="p-4">
      <h3 class="text-lg">History</h3>

      <TransactionHistory
        icon={amazon_icon}
        title="Amazon"
        date="May 24, 2023"
        amount="- RM10.56"
      />
      <TransactionHistory
        icon="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png"
        title="Facebook"
        date="May 22, 2023"
        amount="- RM30.00"
      />
      <TransactionHistory
        icon="https://technave.com/data/files/article/202207081005412770.jpeg"
        title="Play Store"
        date="May 21, 2023"
        amount="- RM43.00"
      />
      <TransactionHistory
        icon={amazon_icon}
        title="Amazon"
        date="May 14, 2023"
        amount="- RM13.56"
      />
    </div>
  </div>
</div>
