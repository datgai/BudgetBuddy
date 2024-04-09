<script lang="ts">
  import type { PageData } from "../$types";
  import Logo from "$lib/images/BudgetBuddyFull.png";
</script>

<svelte:head>
  <title>Register</title>
</svelte:head>

<div>
  <div class="flex mx-2 my-2 py-6">
    <img src={Logo} width="300" alt="Logo" class="mx-auto my-8" />
  </div>
  <div class="flex flex-col mx-2">
    <h1 class="font-bold text-4xl my-1 py-4">Sign Up</h1>
    <form action="?/register" method="POST">
      <div class="flex flex-col mb-8">
        <div class="my-1">
          <label for="userEmail" class="text-xl">Email</label>
          <input
            type="text"
            placeholder="Email"
            name="userEmail"
            class="mx-auto my-2 p-4 w-[100%] rounded-lg bg-transparent border border-[var(--color-theme-1))] appearance-none focus:outline-none focus:shadow-outline text-bg"
            required
          />
        </div>
        <div>
          <label for="userPassword" class="text-xl">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="userPassword"
            class="mx-auto my-2 p-4 w-[100%] rounded-lg bg-transparent border border-[var(--color-theme-1))] shadow appearance-none focus:outline-none focus:shadow-outline text-bg"
            required
          />
        </div>
        <div>
          <label for="userPhone" class="text-xl">Phone</label>
          <input
            type="text"
            placeholder="Phone"
            name="userPhone"
            class="mx-auto my-2 p-4 w-[100%] rounded-lg bg-transparent border border-[var(--color-theme-1))] shadow appearance-none focus:outline-none focus:shadow-outline text-bg"
            required
          />
        </div>
        <div>
          <label for="userName" class="text-xl">Display Name</label>
          <input
            type="text"
            placeholder="Display Name"
            name="userName"
            class="mx-auto my-2 p-4 w-[100%] rounded-lg bg-transparent border border-[var(--color-theme-1))] shadow appearance-none focus:outline-none focus:shadow-outline text-bg"
            required
          />
        </div>

        <button
          type="submit"
          class="bg-[var(--color-theme-1)] gradientBackground font-medium rounded-lg w-full my-6 py-4 text-center"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div>
