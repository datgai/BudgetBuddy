<script>
  import Profile from "./Profile.svelte";
  import Logo from "$lib/images/BudgetBuddy.png";
</script>

<header class="flex md:hidden">
  <div class="flex-1"><img src={Logo} height="50" width="50" alt="" /></div>
  <Profile />
</header>
