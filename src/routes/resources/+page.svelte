<script>
  import ResourceItem from "../ResourcesItem.svelte";
  import Profile from "../Profile.svelte";
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

<div class="container mb-24 md:px-6 px-5">
  <h2 class="mb-6 text-3xl font-bold">Resources</h2>
  <div class="@apply h-[50px] flex flex-col gap-y-5 mt-5">
    <!-- Section: Design Block -->
    <!-- Comment -->
    <ResourceItem
      imageSrc="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      description="Bank Negara committed to ensure Malaysia's financial system remains resilient . . ."
      tags={["#crypto", "#bank", "#2023"]}
      views="651,394"
      likes="36,6545"
      comments="56"
    />
    <ResourceItem
      imageSrc="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      description="Bitcoin Price Jumps 10% But Can Pump BTC Back To $70K?"
      tags={["#BTC", "#bitcoin", "#2024"]}
      views="651"
      likes="365"
      comments="6"
    />
    <ResourceItem
      imageSrc="https://www.investopedia.com/thmb/W2u8B017D-GDqZxH-ddc8BLS8qo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/top_6_apps_for_financial_news-5bfc3459c9e77c0026b6a2bf.jpg"
      description="Bitcoin Tops $67K on Dovish Fed Remarks"
      tags={["#crypto", "#bitcoin", "#Tops"]}
      views="65"
      likes="36545"
      comments="6"
    />
    <!-- Repeat for other resource items -->
  </div>
</div>
