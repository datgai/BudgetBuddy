<script lang="ts">
  import { truncateNumber } from "$lib/utils/utils";
  export let itemThumbnail: string;
  export let itemTitle: string;
  export let itemTags: string[];
  export let views: number;
  export let likes: number;
  export let comments: number;
</script>

<div
  class="flex flex-col sm:flex-row px-[var(--x-padding-cards)] py-[var(--y-padding-cards)] my-[var(--y-margin-cards)]shadow-[rgba(0,0,0,0.35)_0px_5px_15px]"
>
  {#if itemThumbnail}
    <img
      src={itemThumbnail}
      alt="article Thumbnail"
      class="object-cover rounded-t-[var(--card-border-radius)] max-h-[200px] sm:rounded-tr-none sm:rounded-l-[var(--card-border-radius)]"
    />
  {/if}

  <div
    class="flex flex-col bg-[color:var(--color-theme-1)] backdrop-blur-lg {itemThumbnail
      ? 'rounded-b-[var(--card-border-radius)] sm:rounded-bl-none sm:rounded-r-[var(--card-border-radius)] '
      : 'rounded-[var(--card-border-radius)]'} w-full px-[var(--x-padding-cards)] py-[var(--y-padding-cards)] overflow-hidden"
  >
    <div
      class="flex flex-col w-full px-[var(--x-padding-cards)] py-[var(--y-padding-cards)]"
    >
      <h1 class="flex-1 font-bold text-xl sm:max-h-[80px] overflow-hidden">
        {itemTitle}
      </h1>
      <div class="flex py-2 items-center text-sm mb-[15px] overflow-auto">
        {#each itemTags as tag}
          <div
            class="bg-[gray] shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] px-2.5 py-[5px] m-1 rounded-[40px]"
          >
            {tag}
          </div>
        {/each}
      </div>
      <div
        class="container flex items-center pr-[50px] justify-between mt-0.5 mt-[7px]"
      >
        <p class="text-[11px]">{truncateNumber(views)} Views</p>
        <p class="text-[11px]">{truncateNumber(likes)} Likes</p>
        <p class="text-[11px]">{truncateNumber(comments)} Comments</p>
      </div>
    </div>
  </div>
</div>
