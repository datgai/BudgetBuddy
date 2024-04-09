<script lang="ts">
  import Profile from "./Profile.svelte";
  import Logo from "$lib/images/BudgetBuddy.png";
  export let profile: any;
</script>

<header class="flex md:hidden">
  <div>
    <a href="/"><img src={Logo} height="50" width="50" alt="" /></a>
  </div>
  <div class="flex-1"></div>
  <Profile {profile} />
</header>
