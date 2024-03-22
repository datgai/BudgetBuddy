<script lang="ts">
  import { truncateNumber } from "$lib/utils/utils";
  export let imageSrc: string;
  export let description: string;
  export let tags: string[];
  export let views: number;
  export let likes: number;
  export let comments: number;
</script>

<div
  class="flex bg-[color:var(--color-theme-1)] backdrop-blur-lg rounded-[var(--card-border-radius)] l px-[var(--x-padding-cards)] py-[var(--y-padding-cards)] my-[var(--y-margin-cards)] shadow-[rgba(0,0,0,0.35)_0px_5px_15px]"
>
  <img
    class="w-[80px] h-[80px] rounded-[var(--card-border-radius)] mx-2"
    src={imageSrc}
    alt=""
  />
  <div>
    <div class="mb-3">{description}</div>
    <div class="flex items-center text-sm mb-[15px] overflow-auto">
      {#each tags as tag}
        <div
          class="bg-[gray] shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] px-2.5 py-[5px] mx-1 rounded-[40px]"
        >
          {tag}
        </div>
      {/each}
    </div>
    <div class="flex items-center justify-between mt-0.5 mt-[7px]">
      <p class="text-[11px]">{truncateNumber(views)} Views</p>
      <p class="text-[11px]">{truncateNumber(likes)} Likes</p>
      <p class="text-[11px]">{truncateNumber(comments)} Comments</p>
    </div>
  </div>
</div>
