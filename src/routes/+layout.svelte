<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import "./styles.css";
  import "../app.css";
</script>

<div class="app bg-[var(--color-bg-0)]">
  <Navbar />
  <main class="container md:px-6 p-4">
    <slot />
  </main>

  <footer></footer>
</div>
