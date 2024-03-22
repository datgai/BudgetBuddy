<script>
  import "../styles.css";
  import Profile from "../Profile.svelte";
  import ForumsItem from "../ForumsItem.svelte";
</script>

<svelte:head>
  <title>Forums</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="container my-24 md:px-6 p-5">
  <header class="flex">
    <div class="flex-1">Brand</div>
    <Profile />
  </header>

  <h2 class="mb-8 text-3xl font-bold">Forums</h2>
  <div>
    <ForumsItem
      itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      itemTitle="Portfolio Recommendations"
      itemDescription="Recoommend Portfolio here!"
    ></ForumsItem>
    <ForumsItem
      itemTitle="Tips For Budgeting"
      itemDescription="Share your tips for budgeting!"
    ></ForumsItem>
    <ForumsItem
      itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      itemTitle="Investment Talks"
      itemDescription="Real talks about investments."
    ></ForumsItem>
  </div>
</div>
