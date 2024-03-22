<script>
  import "../styles.css";
  import Profile from "../Profile.svelte";
  import ForumsItem from "../ForumsItem.svelte";
</script>

<svelte:head>
  <title>Forums</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="container md:px-6 p-5">
  <header class="flex">
    <div class="flex-1">Brand</div>
    <Profile />
  </header>
</div>

<div class="container px-5 pb-20">
  <h2 class="mb-5 text-3xl font-bold">Forums</h2>
  <div>
    <a href="text_channel">
      <ForumsItem
      itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      itemTitle="Portfolio Recommendations"
      itemDescription="Recoommend Portfolio here!"
    ></ForumsItem>
    </a>
    <a href="text_channel">
      <ForumsItem
        itemTitle="Tips For Budgeting"
        itemDescription="Share your tips for budgeting!"
      ></ForumsItem>
    </a>
    <a href="text_channel">
      <ForumsItem
        itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
        itemTitle="Investment Talks"
        itemDescription="Real talks about investments."
      ></ForumsItem>
    </a>

  </div>
</div>
