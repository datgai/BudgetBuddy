<script>
  import TransactionHistory from '../TransactionHistory.svelte';
  import Overview from '../Overview.svelte';

  import expenses_graph from "$lib/images/expenses.png";
  import amazon_icon from "$lib/images/amazon.jpg";
</script>

<div class="container my-24 md:px-6 p-2">
  <!-- Top Bar -->
  <h2 class="mb-5 text-3xl font-bold">Transactions</h2>

  <Overview graphSrc={expenses_graph} message="Your spending decreased from 5% the last week. Good job!" />

  <div class="p-4">
    <h3 class="text-lg">History</h3>

    <TransactionHistory icon={amazon_icon} title="Amazon" date="May 24, 2022" amount="- RM103.56" />
    <TransactionHistory icon={amazon_icon} title="Amazon" date="May 22, 2022" amount="- RM13.56" />
    <TransactionHistory icon={amazon_icon} title="Amazon" date="May 21, 2022" amount="- RM13.56" />
    <TransactionHistory icon={amazon_icon} title="Amazon" date="May 14, 2022" amount="- RM13.56" />



    <!-- Add more transactions here -->
  </div>
</div>
