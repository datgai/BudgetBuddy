<script lang="ts">
  // Imports
  import MessageItem from "$lib/components/MessageItem.svelte"; // Importing MessageItem component
  import leftarrow from "$lib/images/arrow.png"; // Importing left arrow image
  import send from "$lib/images/send.png"; // Importing send image
  import personProfile from "$lib/images/Person.png"; // Importing default profile image
  import { supabase } from "../../main"; // Importing supabase client instance
  
  // Interface for message object
  interface Message {
    id: number;
    text: string;
    user_name: string;
    created_at: string;
    profile?: string;
  }

  // Array to store fetched messages
  let messages: Message[] = [];

  // Variable to store new message input
  let newMessageText = '';

  // Function to fetch messages from database
  async function fetchMessages() {
    const { data, error } = await supabase.from('messages').select('*').order('id', { ascending: true });
    if (error) {
      console.error('Error fetching messages:', error.message);
    } else {
      messages = data;
    }
  }

  // Function to post a new message to the database
  async function postMessage(text: string, userName: string) {
    const { data, error } = await supabase.from('messages').insert([{ text, user_name: userName }]);
    if (error) {
      console.error('Error posting message:', error.message);
    } else {
      await fetchMessages(); // Fetch updated messages
      newMessageText = ''; // Clear new message input
      scrollToBottom(); // Scroll to bottom to show new message
    }
  }

  // Function to scroll to the bottom of messages container
  function scrollToBottom() {
    const messagesContainer = document.querySelector('.messages-container');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }
  
  // Function to format message timestamp
  function formatTime(timestamp: string): string {
    const messageTime = new Date(timestamp);
    const currentTime = new Date();
    const diff = Math.floor((currentTime.getTime() - messageTime.getTime()) / 1000); 

    if (diff < 60) {
      return 'just now';
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
    } else if (diff < 24 * 3600) {
      const hours = Math.floor(diff / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const day = messageTime.getDate();
      const month = messageTime.getMonth() + 1;
      const year = messageTime.getFullYear() % 100;
      const hours = messageTime.getHours();
      const minutes = messageTime.getMinutes() < 10 ? '0' + messageTime.getMinutes() : messageTime.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      return `${month}/${day}/${year} ${formattedHours}:${minutes}${ampm}`;
    }
  }

  // Fetch messages when the component mounts
  fetchMessages();
</script>

<div class="-m-4 md:-m-6">
  <!-- Top bar -->
  <div class="flex bg-[#060047] h-[8vh] justify-start px-[15px]  w-[100%] md:hidden">
    <a href="forums" class="m-auto w-[35px] h-[35px]">
      <img src={leftarrow} alt="" />
    </a>
    <h2 class="flex-1 text-2xl font-bold text-white m-auto">
      Tips For Budgeting
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
  <div class="flex justify-between items-start p-4 bg-white bg-[#bdbebf] fixed w-[100%] bottom-16 md:bottom-0">
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
