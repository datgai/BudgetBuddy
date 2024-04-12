<script lang="ts">
  import { incomeCategories, expenseCategories } from "$lib/utils/utils";
  export let data;
  let { transactions } = data;
  let selectOptions: typeof incomeCategories | typeof expenseCategories;

  export let isIncome: boolean = transactions[0].transaction_is_income;

  $: {
    if (isIncome) {
      selectOptions = incomeCategories;
    } else {
      selectOptions = expenseCategories;
    }
  }

  import CurrencyInput from "@canutin/svelte-currency-input";
</script>

<h1>Edit transaction</h1>
{#if transactions}
  <form action="?/transactionEdit" method="POST">
    <div class="flex flex-col mb-8">
      <div class="my-1">
        <label for="transactionDateTime" class="text-xl">Date</label>
        <input type="hidden" name="transactionId" value={transactions[0].id} />
        <input
          type="datetime-local"
          value={new Date(transactions[0].transaction_datetime)
            .toISOString()
            .slice(0, 16)}
          name="transactionDateTime"
          class="mx-auto my-2 p-4 w-[100%] rounded-lg bg-transparent border border-[var(--color-theme-1))] appearance-none focus:outline-none focus:shadow-outline text-bg"
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
        <select name="transactionCategory">
          {#each Object.entries(selectOptions) as [category, label]}
            <option value={category}>{label}</option>
          {/each}
        </select>
      </div>

      <div>
        Amount:
        <CurrencyInput
          name="transactionAmount"
          value={transactions[0].transaction_amount}
          locale="nl-NL"
          currency="MYR"
          required
          isNegativeAllowed={false}
        />
      </div>

      <div>
        Transaction Description:
        <input
          type="text"
          name="transactionDescription"
          value={transactions[0].transaction_description}
        />
      </div>
      <button
        type="submit"
        class="bg-[var(--color-theme-1)] gradientBackground font-medium rounded-lg w-full my-6 py-4 text-center"
      >
        Record Transaction
      </button>
    </div>
  </form>
{:else}
  <h1>You are not authorized to do this!</h1>
{/if}
