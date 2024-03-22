<script>
  import NewsItem from "../NewsItem.svelte";
</script>

<!-- Container for demo purpose -->
<div class="container my-24 md:px-6 p-5">
  <!-- Section: Design Block -->
  <section class="mb-15 md:text-left">
    <h2 class="mb-12 text-3xl font-bold">News</h2>

    <div class="relative mb-6">
      <div class="mb-6 ml-auto w-full shrink-0 grow-0 basis-auto">
        <div
          class="mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
          data-te-ripple-init
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/standard/city/018.jpg"
            class="w-full"
            alt="Louvre"
          />
        </div>
      </div>

      <div class="absolute top-24 left-7 text-2xl text-white text-wrap pr-3">
        Crypto investors should be prepared to lose all their money, BOE
        governor says
      </div>

      <div class="absolute bottom-3 left-7 text-xs text-white text-wrap pr-5">
        “I’m going to say this very bluntly again,” he added. “Buy them only if
        you’re prepared to lose all your money.”
      </div>
    </div>
  </section>
  <section>
    <div class="info">
      <div class="flex justify-between text-base">
        <div class="font-semibold">Latest</div>
        <div>See all</div>
      </div>
      <div class="flex justify-between text-base my-2">
        <div class="font-semibold underline underline-offset-8">All</div>
        <div>Trading</div>
        <div>Crypto</div>
        <div>Banking</div>
        <div>Real Estate</div>
      </div>
    </div>

    <div class="@apply h-[50px] flex flex-col gap-y-5 mt-5">
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

<style>
</style>
