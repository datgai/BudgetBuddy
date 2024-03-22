<script>
// @ts-nocheck

    export let imageSrc;
    export let description;
    export let tags;
    export let views;
    export let likes;
    export let comments;
  </script>
  
  <div class="@apply flex gap-x-[15px] rounded-[12px] bg-[--color-theme-2] p-5 shadow-[rgba(0,0,0,0.45)_0px_5px_15px] bg-gradient-to-r from-blue-800 to-indigo-900">
    <img class="w-[80px] h-[80px] rounded-[15px]" src={imageSrc} alt="" />
    <div>
      <div class="mb-3">{description}</div>
      <div class="flex justify-between items-center text-sm mb-[15px]">
        {#each tags as tag}
          <div class="bg-[gray] shadow-[rgba(0,0,0,0.15)_1.95px_1.95px_2.6px] px-2.5 py-[5px] rounded-[40px]">{tag}</div>
        {/each}
      </div>
      <div class="flex items-center justify-between mt-0.5 mt-[7px]">
        <p class="text-[11px]">{views} Views</p>
        <p class="text-[11px]">{likes} Likes</p>
        <p class="text-[11px]">{comments} Comments</p>
      </div>
    </div>
  </div>
  