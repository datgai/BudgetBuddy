<script lang="ts">
  import MessageItem from "$lib/components/MessageItem.svelte";
  import leftarrow from "$lib/images/arrow.png";
  import send from "$lib/images/send.png";

  interface Resource {
    text: string;
    user: boolean;
    userName: string;
    time: string;
    profile: string;
  }

  const resources: Resource[] = [
    {
      text: "Bitcoin is an innovative payment network and a new kind of money. Find all you need to know and get started with Bitcoin on bitcoin.org",
      user: false,
      userName: "Adam",
      time: "7 min ago",
      profile: "",
    },
    {
      text: "Yes",
      user: true,
      userName: "John",
      time: "5 min ago",
      profile:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
    {
      text: "Is Bitcoin a good investment?",
      user: true,
      userName: "Gilbert",
      time: "4 min ago",
      profile:
        "https://img.freepik.com/free-photo/close-up-attractive-handsome-man_144627-14151.jpg",
    },
    {
      text: "the first decentralized cryptocurrency",
      user: true,
      userName: "Adeline",
      time: "4 min ago",
      profile:
        "https://parrotprint.com/wp/wp-content/uploads/2017/04/pexels-photo-27411.jpg",
    },
    {
      text: "Should be considered only if you have a high risk tolerance",
      user: false,
      userName: "Adam",
      time: "2 min ago",
      profile: "../lib/images/Person.png",
    },
    {
      text: "Ya",
      user: false,
      userName: "Adam",
      time: "1 min ago",
      profile: "$lib/images/Person.png",
    },
    {
      text: "How much is $1 Bitcoin in US dollars?",
      user: false,
      userName: "Adam",
      time: "1 min ago",
      profile: "$lib/images/Person.png",
    },

    {
      text: "Nice",
      user: false,
      userName: "Adam",
      time: "1 min ago",
      profile: "$lib/images/Person.png",
    },

    {
      text: "Why is Bitcoin falling?",
      user: true,
      userName: "John",
      time: "1 min ago",
      profile:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
    },
  ];
</script>

<div class="-m-4 md:-m-6">
  <div class="flex bg-[#060047] h-[8vh] justify-start px-[15px]">
    <a href="forums" class="m-auto w-[35px] h-[35px]"
      ><img src={leftarrow} alt="" /></a
    >
    <h2 class="flex-1 text-2xl font-bold text-white m-auto">
      Tips For Budgeting
    </h2>
  </div>

  <div class="flex flex-col h-[85vh] justify-between h-screen">
    <div class="p-4 space-y-4 -mb-2 bg-gray-100 overflow-auto">
      {#each resources as resource}
        <MessageItem {...resource} />
      {/each}
    </div>
    <div class="flex justify-between items-start p-4 bg-white bg-[#bdbebf]">
      <input
        class=" flex-1 mx-2 border-2 w-[80%] rounded p-3 text-sm shadow-inner text-[black] rounded-[20px]"
        type="text"
        placeholder="Type your message…"
      />
      <button
        type="submit"
        class="h-[45px] w-[45px] bg-blue-600 p-2.5 rounded-[50%]"
        ><img src={send} alt="" class="bg-center" /></button
      >
    </div>
  </div>
</div>
