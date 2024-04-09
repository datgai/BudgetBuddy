<script lang="ts">
  interface Option {
    value: string;
    label: string;
  }
  let selectOptions: Option[];
  export let isIncome: boolean = false;

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
          <option value={option.value}>{option.label}</option>
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
      />
    </div>
    <button
      type="submit"
      class="bg-[var(--color-theme-1)] gradientBackground font-medium rounded-lg w-full my-6 py-4 text-center"
    >
      Record Transaction
    </button>
  </div>
  <div class="flex">
    <p class="mx-auto">
      Don't have an account? <a href="register" class="textGradient">
        Sign Up</a
      >
    </p>
  </div>
</form>
