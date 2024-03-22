<script lang="ts">
  export let itemThumbnail: string;
  export let itemCountry: string;
  export let itemTitle: string;
  export let authorThumbnail: string;
  export let authorTitle: string;
  export let authoredAgo: string;
</script>

<div
  class="flex bg-[color:var(--color-theme-1)] backdrop-blur-lg rounded-[var(--card-border-radius)] w-full px-[var(--x-padding-cards)] py-[var(--y-padding-cards)] my-[var(--y-margin-cards)]"
>
  <div class="@apply flex gap-x-[15px] pb-2.5 rounded-[30px]">
    <img class="w-[120px] rounded-[15px]" src={itemThumbnail} alt="" />
    <div class="detail">
      <div class="h-4/5">
        <div class="text-[gray] text-[15px]">{itemCountry}</div>
        <div class="title">
          {itemTitle}
        </div>
      </div>
      <div class="flex items-center justify-between mt-0.5">
        <div class="flex items-center gap-x-2.5">
          <img
            class="w-[25px] h-[25px] rounded-[50%]"
            src={authorThumbnail}
            alt=""
          />
          <div class="name">{authorTitle}</div>
        </div>
        <div class="time">
          <i class="fa-solid fa-clock"></i>
          <p class="clock-time">{authoredAgo}</p>
        </div>
      </div>
    </div>
  </div>
</div>
