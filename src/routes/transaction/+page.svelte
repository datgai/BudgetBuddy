<script>
  import TransactionHistory from '../TransactionHistory.svelte';
  import Overview from '../Overview.svelte';
  import Profile from "../Profile.svelte";
  import expenses_graph from "$lib/images/expenses.png";
  import amazon_icon from "$lib/images/amazon.jpg";
</script>

<svelte:head>
  <title>Dashboard</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="md:px-6 p-5">
  <header class="flex">
    <div class="flex-1">Brand</div>
    <Profile />
  </header>
</div>
<div class="container px-5 pb-20">
  <!-- Top Bar -->
  <h2 class="mb-5 text-3xl font-bold">Transactions</h2>

  <Overview graphSrc={expenses_graph} message="Your spending decreased from 5% the last week. Good job!" />

  <div>
    <h3 class="text-lg">History</h3>

    <TransactionHistory icon={amazon_icon} title="Amazon" date="May 24, 2022" amount="- RM103.56" />
    <TransactionHistory icon={amazon_icon} title="Amazon" date="May 22, 2022" amount="- RM13.56" />
    <TransactionHistory icon={amazon_icon} title="Amazon" date="May 21, 2022" amount="- RM13.56" />
    <TransactionHistory icon={amazon_icon} title="Amazon" date="May 14, 2022" amount="- RM13.56" />
    <!-- Add more transactions here -->
  </div>
</div>
