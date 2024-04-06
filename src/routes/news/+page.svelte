<!-- <script>
  // @ts-nocheck

  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import NewsItem from "$lib/components/NewsItem.svelte";
  const images = [
    {
      path: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-1490908.jpg&fm=jpg",
      id: "image1",
    },
    {
      path: "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-1490908.jpg&fm=jpg",
      id: "image2",
    },
  ];
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
        <li class="font-semibold underline underline-offset-8">All</li>
        <li>Trading</li>
        <li>Crypto</li>
        <li>Banking</li>
        <li>Real Estate</li>
      </ul>
    </div>

    <div class="flex flex-col">
      <NewsItem
        itemThumbnail="https://i0.wp.com/asiatimes.com/wp-content/uploads/2022/10/9c987d2d8fb79b94beb63c972cb2ed74-copy.jpg?fit=1200%2C675&ssl=1"
        itemCountry="Malaysia"
        itemTitle="Malaysia: the surprise winner from US-China chip wars"
        authorThumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BBC_News_logo.svg/2560px-BBC_News_logo.svg.png"
        authorTitle="BBC"
        authoredAgo="10 min ago"
      ></NewsItem>
      <NewsItem
        itemThumbnail="https://thediplomat.com/wp-content/uploads/2022/02/sizes/td-story-s-2/thediplomat_2022-02-22-051828.jpg"
        itemCountry="Malaysia"
        itemTitle="Bank Negara committed to ensure Malaysia's financial system remains
      resilient"
        authorThumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BBC_News_logo.svg/2560px-BBC_News_logo.svg.png"
        authorTitle="BBC"
        authoredAgo="30 min ago"
      ></NewsItem>
      <NewsItem
        itemThumbnail="https://apicms.thestar.com.my/uploads/images/2024/03/23/2607309.jpeg"
        itemCountry="Palestine"
        itemTitle="Oil prices down on Gaza ceasefire talks"
        authorThumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BBC_News_logo.svg/2560px-BBC_News_logo.svg.png"
        authorTitle="BBC"
        authoredAgo="40 min ago"
      ></NewsItem>
    </div>
  </section>
</div> -->

<script>
  import { onMount } from "svelte";
  import { supabase } from "../../main";
  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import NewsItem from "$lib/components/NewsItem.svelte";

  /**
   * @type {any[]}
   */
  let news = [];

  onMount(async () => {
    const { data, error } = await supabase.from("news").select("*");
    if (error) {
      console.error("Error fetching news:", error.message);
    } else {
      news = data;
    }
  });
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
      <div class="info">
        <div class="flex justify-between text-base">
          <div class="font-semibold">Latest</div>
          <div>See all</div>
        </div>
        <ul
          class="flex text-nowrap shrink-0 space-x-20 overflow-auto text-base py-2 my-2"
        >
          <li class="font-semibold underline underline-offset-8">All</li>
          <li>Trading</li>
          <li>Crypto</li>
          <li>Banking</li>
          <li>Real Estate</li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col">
      {#each news as article}
        <NewsItem
          itemThumbnail={article.itemThumbnail}
          itemCountry={article.itemCountry}
          itemTitle={article.itemTitle}
          authorThumbnail={article.authorThumbnail}
          authorTitle={article.authorTitle}
          authoredAgo={article.authoredAgo}
        ></NewsItem>
      {/each}
    </div>
  </section>
</div>
