<script>
  // @ts-nocheck
  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import IncomeGraph from "$lib/components/IncomeGraph.svelte";
  import ExpenseGraph from "$lib/components/ExpenseGraph.svelte";
  import InvestmentGraph from "$lib/components/InvestmentGraph.svelte";
  import SubscriptionGraph from "$lib/components/SubscriptionGraph.svelte";
</script>

<svelte:head>
  <title>Dashboard</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <MobileHeader />
  <div>
    <h2 class="my-2 text-3xl font-bold">Dashboard</h2>
  </div>

  <div
    class="flex flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 my-3"
  >
    <h2 class="mb-8 text-2xl font-bold">Available Balance</h2>
    <h1 class="text-3xl font-bold">MYR 50,000.00</h1>
    <div class="flex flex-row mx-2">
      <a href="transactions" class="flex-1 my-auto">See details</a>
      <a href="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-14 h-14"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>

  <div class="flex flex-row">
    <div
      class="flex flex-1 flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 mx-1"
    >
      <h2 class="mb-8 text-xl font-bold">MYR 5,800.00</h2>
      <h1 class="font-bold">Income</h1>
      <IncomeGraph />
    </div>

    <div
      class="flex flex-1 flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 mx-1"
    >
      <h2 class="mb-8 text-xl font-bold">MYR 1,200.00</h2>
      <h1 class="font-bold">Expenses</h1>
      <ExpenseGraph />
    </div>
  </div>

  <div
    class="flex flex-1 flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 my-2"
  >
    <h2 class="mb-8 text-xl font-bold">Investments</h2>
    <h1 class="font-bold">MYR 1,800.00</h1>
    <InvestmentGraph />
  </div>

  <div
    class="flex flex-1 flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 my-2"
  >
    <h2 class="mb-8 text-xl font-bold">Subscriptions</h2>
    <h1 class="font-bold">MYR 1,400.00</h1>
    <SubscriptionGraph />
  </div>

  <h2 class="mb-8 text-3xl font-bold">Categories</h2>
  <div class="flex cardGradientBackground rounded-2xl w-full px-2 py-2">
    <div class="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-10 h-10 my-auto mx-2"
      >
        <path
          d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
        />
      </svg>
      <div class="flex-1 flex flex-row w-full p-2">
        <div class="flex-1">
          <h1 class="font-bold text-xl">Shopping</h1>
          <h2>MYR 150.00</h2>
          <div class="flex items-center justify-between mt-0.5"></div>
        </div>
      </div>
    </div>
  </div>
</div>
