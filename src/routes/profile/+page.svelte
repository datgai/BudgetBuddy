<script lang="ts">
  import person_picture from "$lib/images/Person.png";
  import { enhance } from "$app/forms";
  import type { SubmitFunction } from "@sveltejs/kit";

  export let data;
  export let form;

  let { session, supabase, profile } = data;
  $: ({ session, supabase, profile } = data);

  let profileForm: HTMLFormElement;
  let loading = false;
  let fullName: string = profile?.full_name ?? "";
  let username: string = profile?.username ?? "";
  let website: string = profile?.website ?? "";
  let avatarUrl: string = profile?.avatar_url ?? "";

  const handleSubmit: SubmitFunction = () => {
    loading = true;
    return async () => {
      loading = false;
    };
  };

  const handleSignOut: SubmitFunction = () => {
    loading = true;
    return async ({ update }) => {
      loading = false;
      update();
    };
  };
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<header>
  <div>
    <a href="/" class="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </a>
    <h1 class="flex-1 text-xl font-bold mx-2 text-right">PROFILE</h1>
  </div>
</header>

<body class="px-5 py-10">
  <div
    class="shadowEffect flex flex-col mx-2 my-4 px-2 py-6 cardGradientBackgroundSecond rounded-[var(--card-border-radius)]"
  >
    <div class="mx-auto">
      <img
        height="250"
        width="250"
        class="rounded-full border-4 border-indigo-500"
        src={person_picture}
      />
    </div>
    <div class=" my-2 mx-auto">
      <p
        class="font-bold text-xl text-[var(--color-text)] truncate text-center"
      >
        Adam Bob
      </p>
      <p class="truncate text-xl text-[var(--color-text-inactive)] text-center">
        AdamsBob@mail.com
      </p>
    </div>

    <div class="my-4 mx-auto w-80">
      <p
        class="font-bold text-xl text-[var(--color-text)] truncate text-center"
      >
        Level 12
      </p>
      <div class="flex">
        <div
          class="mx-auto shadowEffect bg-gray-200 rounded-full h-4 w-[60vw] mb-4 dark:bg-white border border-indigo-500"
        >
          <div
            class="bg-blue-600 h-4 rounded-full dark:bg-blue-500 shadowEffect"
            style="width: 40%"
          ></div>
        </div>
      </div>

      <div class="flex flex-row mx-auto justify-center">
        <p
          class="font-bold text-xl text-[var(--color-text)] truncate text-center mx-2"
        >
          View Rewards
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mx-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </div>
    </div>
  </div>

  <div class="mx-2 my-4 px-2 py-6">
    <ul class="text-2xl">
      <li class="p-3">Notifications</li>
      <li class="p-3">Security</li>
      <li class="p-3">Support</li>
      <li class="p-3">About</li>
      <li class="p-3">FAQ</li>
      <li class="p-3">Rate Us</li>
      <li class="p-3">Sign Out</li>
    </ul>
  </div>

  <div>
    <div class="form-widget">
      <form
        class="form-widget"
        method="post"
        action="?/update"
        use:enhance={handleSubmit}
        bind:this={profileForm}
      >
        <div>
          <label for="email">Email</label>
          <input id="email" type="text" value={session.user.email} disabled />
        </div>

        <div>
          <label for="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={form?.fullName ?? fullName}
          />
        </div>

        <div>
          <label for="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={form?.username ?? username}
          />
        </div>

        <div>
          <label for="website">Website</label>
          <input
            id="website"
            name="website"
            type="url"
            value={form?.website ?? website}
          />
        </div>

        <div>
          <input
            type="submit"
            class="button block primary"
            value={loading ? "Loading..." : "Update"}
            disabled={loading}
          />
        </div>
      </form>

      <form method="post" action="?/signout" use:enhance={handleSignOut}>
        <div>
          <button class="button block" disabled={loading}>Sign Out</button>
        </div>
      </form>
    </div>
  </div>
</body>

<style>
  li:hover {
    background-color: white;
    color: black;
    border-radius: 20px;
    font-weight: 500;
  }
</style>
