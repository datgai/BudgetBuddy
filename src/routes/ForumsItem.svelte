<script lang="ts">
  import person_picture from "$lib/images/Person.png";
  export let itemThumbnail: String;
  export let itemTitle: String;
  export let itemDescription: String;
</script>

<div class="flex flex-col my-2">
  {#if itemThumbnail}
    <img src={itemThumbnail} alt="car!" class="rounded-t-2xl" />
  {/if}
  <div
    class="flex bg-[color:var(--color-theme-1)] backdrop-blur-lg {itemThumbnail
      ? 'rounded-b-2xl'
      : 'rounded-2xl'} w-full px-2 py-2"
  >
    <div class="flex flex-row w-full p-2">
      <div class="flex-1">
        <h1 class="font-bold text-xl">{itemTitle}</h1>
        <h2>{itemDescription}</h2>
        <div class="flex -space-x-4 rtl:space-x-reverse">
          <img
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={person_picture}
            alt=""
          />
          <img
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={person_picture}
            alt=""
          />
          <img
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            src={person_picture}
            alt=""
          />
          <a
            class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
            href="#">+99</a
          >
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  </div>
</div>
