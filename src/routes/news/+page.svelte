<script>
  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import NewsItem from "$lib/components/NewsItem.svelte";
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
      class="flex flex-col mb-6 p-2 overflow-hidden min-h-[70vh] rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[url(https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg)]"
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
        itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
        itemCountry="Malaysia"
        itemTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio eros, feugiat nec aliquet ac, cursus ac ligula. Vivamus a luctus ligula. Aliquam vulputate vestibulum lobortis. Cras a dapibus nulla. Sed pellentesque luctus dolor, ut faucibus odio placerat nec. Fusce feugiat tempor eleifend. Fusce efficitur eu nisi consequat lacinia."
        authorThumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BBC_News_logo.svg/2560px-BBC_News_logo.svg.png"
        authorTitle="BBC"
        authoredAgo="10 min ago"
      ></NewsItem>
      <NewsItem
        itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
        itemCountry="Malaysia"
        itemTitle="Bank Negara committed to ensure Malaysia's financial system remains
      resilient"
        authorThumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BBC_News_logo.svg/2560px-BBC_News_logo.svg.png"
        authorTitle="BBC"
        authoredAgo="10 min ago"
      ></NewsItem>
      <NewsItem
        itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
        itemCountry="Malaysia"
        itemTitle="Bank Negara committed to ensure Malaysia's financial system remains
    resilient"
        authorThumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BBC_News_logo.svg/2560px-BBC_News_logo.svg.png"
        authorTitle="BBC"
        authoredAgo="10 min ago"
      ></NewsItem>
      <NewsItem
        itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
        itemCountry="Malaysia"
        itemTitle="Bank Negara committed to ensure Malaysia's financial system remains
  resilient"
        authorThumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BBC_News_logo.svg/2560px-BBC_News_logo.svg.png"
        authorTitle="BBC"
        authoredAgo="10 min ago"
      ></NewsItem>
      <NewsItem
        itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
        itemCountry="Malaysia"
        itemTitle="Bank Negara committed to ensure Malaysia's financial system remains
resilient"
        authorThumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BBC_News_logo.svg/2560px-BBC_News_logo.svg.png"
        authorTitle="BBC"
        authoredAgo="10 min ago"
      ></NewsItem>
    </div>
  </section>
</div>


