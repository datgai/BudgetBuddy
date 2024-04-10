<script lang="ts">
  export let data;
  let { profile, transactions } = data;

  interface Option {
    value: string;
    label: string;
  }
  let selectOptions: Option[];
  export let isIncome: boolean = transactions[0].transaction_is_income;

  $: {
    if (isIncome) {
      selectOptions = [
        { value: "paycheck", label: "Paycheck" },
        { value: "investments", label: "Investments" },
        { value: "savings", label: "Savings " },
      ];
    } else {
      selectOptions = [
        { value: "food", label: "Food" },
        { value: "shopping", label: "Shopping" },
        { value: "entertainment", label: "Entertainment" },
        { value: "rent", label: "Rent" },
        { value: "utilities", label: "Utilities" },
        { value: "others", label: "Others" },
      ];
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
          {#each selectOptions as option}
            {#if transactions[0].transaction_category === option.value}
              <option value={option.value} selected>{option.label}</option>
            {:else}
              <option value={option.value}>{option.label}</option>
            {/if}
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
