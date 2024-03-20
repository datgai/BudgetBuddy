<script>
  import Navbar from "./Navbar.svelte";
  import "./styles.css";
  import "../app.css";
</script>

<div class="app bg-[var(--color-bg-0)]">
  <Navbar />
  <main>
    <slot />
  </main>

  <footer></footer>
</div>
