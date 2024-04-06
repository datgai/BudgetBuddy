<script lang="ts">
  import { onMount } from "svelte";
  import { fetchNews, filterNews } from "./page";
  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import NewsItem from "$lib/components/NewsItem.svelte";

  let news: any[] = [];
  let activeButton = "All";
  let buttons = [
    { label: "All" },
    { label: "Trading" },
    { label: "Crypto" },
    { label: "Banking" },
    { label: "Real Estate" },
  ];

  onMount(async () => {
    await updateNews(activeButton);
  });

  async function updateNews(type: string) {
    activeButton = type;
    news = await filterNews(type);
  }
</script>

<svelte:head>
  <title>News</title>
</svelte:head>

<div>
  <MobileHeader />

  <div>
    <h2 class="my-2 text-3xl font-bold">News</h2>
  </div>

  <section class="mb-15 md:text-left">
    <div
      class="flex flex-col mb-6 p-2 overflow-hidden min-h-[40vh] rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[url(https://cryptonomist.ch/wp-content/uploads/2023/02/analisi-bitcoin-ethereum-1024x683.jpg)]"
      data-te-ripple-init
    >
      <div
        class="flex-1 text-3xl text-white text-wrap py-2 my-2 overflow-hidden"
      >
        Crypto investors should be prepared to lose all their money, BOE
        governor says
      </div>
      <div class="text-xs text-white text-wrap pr-5">
        “I’m going to say this very bluntly again,” he added. “Buy them only if
        you’re prepared to lose all your money.”
      </div>
    </div>
  </section>

  <section class="mb-[10vh]">
    <div class="info">
      <div class="flex justify-between text-base">
        <div class="font-semibold">Latest</div>
        <div>See all</div>
      </div>
      <ul
        class="flex text-nowrap shrink-0 space-x-20 overflow-auto text-base py-2 my-2"
      >
        {#each buttons as { label }}
          <li>
            <button
              class={activeButton == label
                ? "font-semibold underline underline-offset-8"
                : ""}
              on:click={() => updateNews(label)}>{label}</button
            >
          </li>
        {/each}
      </ul>
    </div>

    <div class="flex flex-col">
      {#each news as article}
        <a href={article.link}>
          <NewsItem
            itemThumbnail={article.itemThumbnail}
            itemCountry={article.itemCountry}
            itemTitle={article.itemTitle}
            authorThumbnail={article.authorThumbnail}
            authorTitle={article.authorTitle}
            authoredAgo={article.authoredAgo}
          />
        </a>
      {/each}
    </div>
  </section>
</div>
