<script>
  import ResourceItem from "$lib/components/ResourcesItem.svelte";
</script>

<svelte:head>
  <title>Resources</title>
</svelte:head>

<div>
  <div>
    <h2 class="my-2 text-3xl font-bold">Resources</h2>
  </div>

  <div class="flex flex-col gap-y-4">
    <ResourceItem
      itemThumbnail="https://media.licdn.com/dms/image/D5612AQHNW3EKA-Fdyg/article-cover_image-shrink_720_1280/0/1682684162015?e=2147483647&v=beta&t=bR7zJ3dYWhkgs7DGotLo1HPAdzKUJOFVzmvYeLgW83A"
      itemTitle="Mastering Money: A Comprehensive Guide to Financial Literacy"
      itemTags={[
        "#Crypto",
        "#Bank",
        "#2024",
        "#Financial",
        "#Money",
        "#Guide",
        "#Beginner",
        "#Invest",
        "#Finance",
      ]}
      views={651394}
      likes={366545}
      comments={56}
    />
    <ResourceItem
      itemThumbnail="https://image.cnbcfm.com/api/v1/image/106826305-1624383819971-106826305-1611074293047-gettyimages-1295325607-_e6w9660_2021010863111059.jpg?v=1689789553&w=929&h=523&vtcrop=y"
      itemTitle="Bitcoin Price Jumps 10% But Can Pump BTC Back To $70K?"
      itemTags={["#BTC", "#bitcoin", "#2024"]}
      views={651}
      likes={365}
      comments={6}
    />
    <ResourceItem
      itemThumbnail="https://cdn.corporatefinanceinstitute.com/assets/financial-literacy1.jpeg"
      itemTitle="Money Matters 101: Essential Financial Education for All"
      itemTags={["#Money", "#Education", "#Beginner"]}
      views={65}
      likes={36545}
      comments={6}
    />
  </div>
</div>
