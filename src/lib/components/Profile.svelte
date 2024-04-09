<script lang="ts">
  import person_picture from "$lib/images/Person.png";
  export let profile: any;
</script>

<a
  class="flex cardGradientBackgroundSecond shadowEffect rounded-full py-1"
  href="/profile"
>
  {#if profile}
    <div class="flex-1 w-[100px] flex-row mx-2 my-auto">
      <p class="font-bold text-sm text-[var(--color-text)] truncate">
        {profile.username}
      </p>
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
  {:else}
    <div class="flex-1 flex-row mx-2 my-auto">
      <p>Login</p>
    </div>
  {/if}
</a>
