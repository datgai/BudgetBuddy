<script>
  import person_picture from "$lib/images/Person.png";
</script>

<a
  class="flex bg-[color:var(--color-theme-1)] backdrop-blur-lg rounded-full w-[35vw] mx-2 px-2 py-2"
  href="profile"
>
  <div class="flex-2 w-[50%] flex-row mx-2 my-auto">
    <p class="font-bold text-xs text-[var(--color-text)] truncate">Adam Bob</p>
    <p class="truncate text-xs text-[var(--color-text-inactive)]">View Profile</p>
  </div>
  <div class="flex-1 mx-1">
    <img
      height="40"
      width="40"
      class="rounded-full border-2 border-indigo-500"
      src={person_picture}
    />
  </div>
</a>
