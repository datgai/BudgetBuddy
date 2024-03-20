<script>
  let isOpen = false; // State for mobile nav toggle
</script>

<nav
  class="fixed bottom-0 md:relative md:top-auto bg-gray-800 text-white w-full md:flex md:justify-between md:items-center z-10"
>
  <!-- Desktop Menu -->
  <div class="px-4 py-5 flex justify-between items-center">
    <a href="#" class="text-white font-bold">Brand</a>
    <button on:click={() => (isOpen = !isOpen)} class="text-white md:hidden">
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
        />
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div
    class={`md:flex md:items-center ${isOpen ? "flex" : "hidden"} flex-col md:flex-row pb-5 md:pb-0 fixed md:static bottom-0 w-full bg-gray-800 md:bg-transparent`}
  >
    <a
      href="#"
      class="py-2 px-4 text-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 text-white block"
      >Home</a
    >
    <a
      href="#"
      class="py-2 px-4 text-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 text-white block"
      >About</a
    >
    <a
      href="#"
      class="py-2 px-4 text-sm hover:bg-gray-700 md:hover:bg-transparent md:border-0 text-white block"
      >Contact</a
    >
  </div>
</nav>
