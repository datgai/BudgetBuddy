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

  <div class="h-[50px] flex flex-col gap-y-5 mt-5">
    <ResourceItem
      imageSrc="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      description="Bank Negara committed to ensure Malaysia's financial system remains resilient . . ."
      tags={[
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
      imageSrc="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      description="Bitcoin Price Jumps 10% But Can Pump BTC Back To $70K?"
      tags={["#BTC", "#bitcoin", "#2024"]}
      views={651}
      likes={365}
      comments={6}
    />
    <ResourceItem
      imageSrc="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      description="Bitcoin Tops $67K on Dovish Fed Remarks asd;lkfasl;dfks;adlfs;ldafka;sdfk;asd fkasl;dfksd;lfksd;lfk;lsdkaf"
      tags={["#crypto", "#bitcoin", "#Tops"]}
      views={65}
      likes={36545}
      comments={6}
    />
  </div>
</div>
