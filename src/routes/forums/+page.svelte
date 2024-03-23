<script>
  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import ForumsItem from "$lib/components/ForumsItem.svelte";
</script>

<svelte:head>
  <title>Forums</title>
</svelte:head>

<div>
  <MobileHeader />
  <div>
    <h2 class="my-2 text-3xl font-bold">Forums</h2>
  </div>

  <div>
    <ForumsItem
      itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      itemTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio eros, feugiat nec aliquet ac, cursus ac ligula. Vivamus a luctus ligula. Aliquam vulputate vestibulum lobortis. Cras a dapibus nulla. Sed pellentesque luctus dolor, ut faucibus odio placerat nec. Fusce feugiat tempor eleifend. Fusce efficitur eu nisi consequat lacinia. ."
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
