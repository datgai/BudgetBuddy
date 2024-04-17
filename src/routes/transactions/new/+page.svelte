<script lang="ts">
  import { incomeCategories, expenseCategories } from "$lib/utils/utils";

  let selectOptions: typeof incomeCategories | typeof expenseCategories;
  export let isIncome: boolean = false;

  $: {
    if (isIncome) {
      selectOptions = incomeCategories;
    } else {
      selectOptions = expenseCategories;
    }
  }
  import CurrencyInput from "@canutin/svelte-currency-input";
</script>

<h1>Add new transaction</h1>

<form action="?/transactionNew" method="POST">
  <div class="flex flex-col mb-8">
    <div class="my-1">
      <label for="transactionDateTime" class="text-xl">Date</label>
      <input
        type="datetime-local"
        value={new Date(Date.now() + 8 * 60 * 60 * 1000)
          .toISOString()
          .slice(0, 16)}
        name="transactionDateTime"
        class="mx-auto my-2 p-4 w-[100%] rounded-lg bg-transparent border-2 border-zinc-900 appearance-none focus:outline-none focus:shadow-outline text-bg"
      />
    </div>
    <div>
      Type of transaction
      <div class="flex"></div>
      <div>
        <input
          type="radio"
          name="transactionType"
          bind:group={isIncome}
          value={true}
          required
        />
        <label for="income">Income</label><br />
      </div>
      <div>
        <input
          type="radio"
          name="transactionType"
          bind:group={isIncome}
          value={false}
          required
        />
        <label for="expense">Expense</label><br />
      </div>
    </div>

    <div>
      <label for="transactionCategory">Transaction Category: </label>
      <select name="transactionCategory" class="text-white bg-blue-800 border-2 border-zinc-900">
        {#each Object.entries(selectOptions) as [category, label]}
          <option value={category}>{label}</option>
        {/each}
      </select>
    </div>

    <div>
      Amount:
      <CurrencyInput
        name="transactionAmount"
        value={0.0}
        locale="nl-NL"
        currency="MYR"
        required
        isNegativeAllowed={false}
        inputClasses={
          { 
            wrapper: "form-control block",
            formatted: 'py-1 text-white-950 border-2 border-zinc-900 bg-gradient-to-r from-blue-800 from-10% to-indigo-500 to-100%',
            formattedPositive: 'text-green-700',
            formattedNegative: 'text-red-700'
          }
        }
      />
    </div>

    <div>
      Transaction Description:
      <br>
      <input type="text" name="transactionDescription" class="py-1 text-white border-2 border-zinc-900 bg-gradient-to-r from-blue-800 from-10% to-indigo-500 to-100%" />
    </div>
    <button
      type="submit"
      class="bg-gradient-to-b from-blue-800 to-violet-900 border-2 border-zinc-900 font-medium rounded-lg w-full my-6 py-4 text-center"
    >
      Record Transaction
    </button>
  </div>
</form>
