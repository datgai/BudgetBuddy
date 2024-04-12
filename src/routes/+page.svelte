<script lang="ts">
  import IncomeGraph from "$lib/components/IncomeGraph.svelte";
  import ExpenseGraph from "$lib/components/ExpenseGraph.svelte";
  import type { PageData } from "./$types";
  import CategoryTotal from "$lib/components/CategoryTotal.svelte";

  export let data: PageData;
  let {
    profile,
    balance,
    balanceHistory,
    incomeTotal,
    incomeHistory,
    expenseTotal,
    expenseHistory,
    categoryTotals,
  } = data;
  $: ({
    profile,
    balance,
    balanceHistory,
    incomeTotal,
    incomeHistory,
    expenseTotal,
    expenseHistory,
    categoryTotals,
  } = data);
</script>

<svelte:head>
  <title>Dashboard</title>
  <meta name="description" />
</svelte:head>

<div>
  <div>
    <h2 class="my-2 text-3xl font-bold">{profile?.username}'s Dashboard</h2>
    <h2 class="my-2 text-3xl font-bold">Current Month</h2>
  </div>

  <div
    class="flex flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 my-3"
  >
    <h2 class="mb-8 text-2xl font-bold">Available Balance</h2>
    <h1 class="text-3xl font-bold">MYR {balance?.toFixed(2)}</h1>
    <div class="flex flex-row mx-2">
      <a href="transactions" class="flex-1 my-auto">See details</a>
      <a href="/transactions/new"
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
      <h2 class="mb-8 text-xl font-bold">MYR {incomeTotal?.toFixed(2)}</h2>
      <h1 class="font-bold">Income</h1>
      <IncomeGraph />
    </div>

    <div
      class="flex flex-1 flex-col cardGradientBackground border-b-4 border-blue-700 rounded-[30px] px-6 py-2 mx-1"
    >
      <h2 class="mb-8 text-xl font-bold">MYR {expenseTotal?.toFixed(2)}</h2>
      <h1 class="font-bold">Expenses</h1>
      <ExpenseGraph />
    </div>
  </div>
  <h2 class="my-4 text-3xl font-bold">Categories</h2>

  {#if categoryTotals}
    {#each Object.entries(categoryTotals) as [category, categoryTotal]}
      {#if categoryTotal > 0}
        <CategoryTotal {category} amount={Number(categoryTotal).toFixed(2)} />
      {/if}{/each}
  {:else}
    <p>
      Oh no! looks like your records empty! go and <a href="/transactions/new"
        >record a transaction now!</a
      >
    </p>
  {/if}
</div>
