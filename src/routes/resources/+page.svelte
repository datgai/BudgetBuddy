<script>
  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import ResourceItem from "$lib/components/ResourcesItem.svelte";
</script>

<svelte:head>
  <title>Resources</title>
</svelte:head>

<div>
  <MobileHeader />
  <div>
    <h2 class="my-2 text-3xl font-bold">Resources</h2>
  </div>

  <div class="flex flex-col gap-y-4">
    <ResourceItem
      itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      itemTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio eros, feugiat nec aliquet ac, cursus ac ligula. Vivamus a luctus ligula. Aliquam vulputate vestibulum lobortis. Cras a dapibus nulla. Sed pellentesque luctus dolor, ut faucibus odio placerat nec. Fusce feugiat tempor eleifend. Fusce efficitur eu nisi consequat lacinia. ."
      itemTags={[
        "#crypto",
        "#bank",
        "#2023",
        "#test",
        "#test",
        "#test",
        "#test",
        "#test",
        "#test",
        "#test",
        "#test",
        "#test",
      ]}
      views={651394}
      likes={366545}
      comments={56}
    />
    <ResourceItem
      itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      itemTitle="Bitcoin Price Jumps 10% But Can Pump BTC Back To $70K?"
      itemTags={["#BTC", "#bitcoin", "#2024"]}
      views={651}
      likes={365}
      comments={6}
    />
    <ResourceItem
      itemThumbnail="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      itemTitle="Bitcoin Tops $67K on Dovish Fed Remarks asd;lkfasl;dfks;adlfs;ldafka;sdfk;asd fkasl;dfksd;lfksd;lfk;lsdkaf"
      itemTags={["#crypto", "#bitcoin", "#Tops"]}
      views={65}
      likes={36545}
      comments={6}
    />
  </div>
</div>
