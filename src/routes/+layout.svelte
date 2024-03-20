<script>
  import Navbar from "./Navbar.svelte";
  import "./styles.css";
  import "../app.css";
</script>

<div class="app">
  <Navbar />

  <main>
    <slot />
  </main>

  <footer></footer>
</div>
