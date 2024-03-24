<script>
  import Profile from "./Profile.svelte";
  import Logo from "$lib/images/BudgetBuddy.png";
</script>

<header class="flex md:hidden">
  <div class="flex-1">
    <a href="/"><img src={Logo} height="50" width="50" alt="" /></a>
  </div>
  <Profile />
</header>
