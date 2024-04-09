
<script lang="ts">
    // Imports
    import MessageItem from "$lib/components/MessageItem.svelte"; // Importing MessageItem component
    import leftarrow from "$lib/images/arrow.png"; // Importing left arrow image
    import send from "$lib/images/send.png"; // Importing send image
    import personProfile from "$lib/images/Person.png"; // Importing default profile image
    import { supabase } from "../../../main"; // Importing supabase client instance
    import { scrollToBottom, formatTime, type Message } from "./page";
    import { page } from "$app/stores"
    const channelId = $page.params.channelId

    // Array to store fetched messages
    let messages: Message[] = [];
  
    // Variable to store new message input
    let newMessageText = "";
  
    // Function to fetch messages from database
    async function fetchMessages() {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("channel_id", channelId)
        .order("msg_id", { ascending: true });
      if (error) {
        console.error("Error fetching messages:", error.message);
      } else {
        messages = data;
      }
    }

    async function fetchForumTitle() {
        const { data, error } = await supabase
            .from("forums")
            .select("title")
            .eq("id", channelId)
            .single();
        if (error) {
            console.error("Error fetching forum title:", error.message);
            return null;
        } else {
            return data ? data.title : null; 
        }
    }   
  
    // Function to post a new message to the database
    async function postMessage(text: string, userName: string) {
      const { data, error } = await supabase
        .from("messages")
        .insert([{channel_id:channelId,text, user_name: userName }]);
      if (error) {
        console.error("Error posting message:", error.message);
      } else {
        await fetchMessages(); // Fetch updated messages
        newMessageText = ""; // Clear new message input
        scrollToBottom(); // Scroll to bottom to show new message
      }
    }
  
    // Fetch messages when the component mounts
    fetchMessages();
  </script>
  
  <div class="-m-4 md:-m-6">
    <!-- Top bar -->
    <div
      class="flex bg-[#060047] h-[8vh] justify-start px-[15px] w-[100%] md:hidden"
    >
      <a href="/forums" class="m-auto w-[35px] h-[35px]">
        <img src={leftarrow} alt="" />
      </a>
      <h2 class="flex-1 text-2xl font-bold text-white m-auto ml-2">
        {#await fetchForumTitle()}
        <p>Loading...</p>
        {:then title}
            {title}
        {:catch error}
            <p>Error: {error.message}</p>
        {/await}
    </h2>
    </div>
  
    <!-- Messages container -->
    <div class="flex flex-col h-[77vh] bg-gray-100 justify-between">
      <div class="p-4 space-y-4 bg-gray-100 overflow-auto messages-container">
        {#each messages as message}
          <MessageItem
            userName={message.user_name}
            text={message.text}
            user={message.user_name !== "John"}
            time={formatTime(message.created_at)}
            profile={message.profile || personProfile}
          />
        {/each}
      </div>
    </div>
  
    <!-- New message input and send button -->
    <div
      class="flex justify-between items-start p-4 bg-white bg-[#bdbebf] fixed w-[100%] bottom-16 md:bottom-0"
    >
      <input
        bind:value={newMessageText}
        class=" flex-1 mx-2 border-2 w-[80%] rounded p-3 text-sm shadow-inner text-[black] rounded-[20px]"
        type="text"
        placeholder="Type your message…"
      />
      {#if newMessageText !== ""}
        <button
          on:click={() => {
            postMessage(newMessageText, "John");
          }}
          class="h-[45px] w-[45px] bg-blue-600 p-2.5 rounded-[50%]"
        >
          <img src={send} alt="" class="bg-center" />
        </button>
      {/if}
    </div>
  </div>
  