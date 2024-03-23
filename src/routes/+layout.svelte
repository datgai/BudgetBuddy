<script>
  import Navbar from "$lib/components/Navbar.svelte";
  import "./styles.css";
  import "../app.css";
</script>

<div class="app">
  <Navbar />
  <main class="md:px-6 p-4">
    <slot />
  </main>

  <footer></footer>
</div>
