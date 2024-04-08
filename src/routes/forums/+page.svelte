<script>
  import ForumsItem from "$lib/components/ForumsItem.svelte";
</script>

<svelte:head>
  <title>Forums</title>
</svelte:head>

<div>
  <div>
    <h2 class="my-2 text-3xl font-bold">Forums</h2>
  </div>

  <div>
    <a href="text_channel">
      <ForumsItem
        itemThumbnail="https://g.foolcdn.com/editorial/images/769992/bitcoin-cryptocurrency-golden-coins.jpg"
        itemTitle="Discussions on the Cryptocurrency Highway"
        itemDescription="Exploring the Future of Finance!!"
        chatRoomURL="text_channel"
      ></ForumsItem>
      <ForumsItem
        itemTitle="Tips For Budgeting"
        itemDescription="Share your tips for budgeting!"
        chatRoomURL="text_channel"
      ></ForumsItem>
      <ForumsItem
        itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
        itemTitle="Investment Talks"
        itemDescription="Real talks about investments."
        chatRoomURL="text_channel"
      ></ForumsItem>
    </a>
  </div>
</div>
