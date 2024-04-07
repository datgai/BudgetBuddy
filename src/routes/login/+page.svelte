<script>
  import Logo from "$lib/images/BudgetBuddyFull.png";
  import { Auth } from "@supabase/auth-ui-svelte";
  import { ThemeSupa } from "@supabase/auth-ui-shared";

  export let data;
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div>
  <div class="flex mx-2 my-2 py-6">
    <img src={Logo} width="300" alt="Logo" class="mx-auto my-8" />
  </div>
  <div class="flex flex-col mx-2">
    <h1 class="font-bold text-4xl my-1 py-4">Sign In</h1>
    <Auth
      supabaseClient={data.supabase}
      view="sign_in"
      redirectTo={`${data.url}/auth/confirm`}
      appearance={{ theme: ThemeSupa, style: { input: "color: #fff" } }}
      providers={["google", "facebook", "twitter"]}
    />
    <h1 class="font-bold text-4xl my-1 py-4">Sign Up</h1>
    <Auth supabaseClient={data.supabase} view="sign_up" />
  </div>
  <div></div>
</div>
