<script>
  import person_picture from "$lib/images/Person.png";
</script>

<a
  class="flex cardGradientBackgroundSecond shadowEffect rounded-full w-[180px] py-1"
  href="profile"
>
  <div class="flex-1 w-[50%] flex-row mx-2 my-auto">
    <p class="font-bold text-sm text-[var(--color-text)] truncate">Adam Bob</p>
    <p class="truncate text-xs text-[var(--color-text-inactive)]">
      View Profile
    </p>
  </div>
  <div class="mx-2 justify-end">
    <img
      height="40"
      width="40"
      class="rounded-full border-2 border-indigo-500"
      src={person_picture}
    />
  </div>
</a>
