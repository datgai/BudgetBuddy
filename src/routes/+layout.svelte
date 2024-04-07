<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import "./styles.css";
  import "../app.css";
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  export let data;

  let { supabase, session } = data;
  $: ({ supabase, session } = data);

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth");
      }
    });

    return () => data.subscription.unsubscribe();
  });
</script>

<div class="app">
  <Navbar />
  <main class="md:px-6 p-4">
    <slot />
  </main>

  <footer><div class="h-[70px] md:h-[0px]"></div></footer>
</div>
