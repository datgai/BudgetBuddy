<script lang="ts">
  export let text: string;
  export let user: boolean;
  export let userName: string; 
  export let time: string;
  export let profile: string;
  import personProfile from "../lib/images/Person.png";
</script>

<div
  class="{user ? 'justify-start' : 'justify-end'} flex w-full mt-2 space-x-3"
>
  {#if user}
    <img
      class="flex-shrink-0 h-10 w-10 rounded-full object-cover"
      src={profile}
      alt=""
    />
  {/if}
  <div class="flex flex-col max-w-xl">
    <p class="text-xs text-black {user ? '' : 'text-right'}">{userName}</p>
    <div
      class="{user ? 'bg-gray-300' : 'bg-blue-600 text-white'} p-3 rounded-lg"
    >
      <p class="text-sm {user ? 'text-black' : ''}">{text}</p>
    </div>
    <span class="text-xs text-gray-500 {user ? '' : 'text-right'}">{time}</span>
  </div>
  {#if !user}
    <img
      class="flex-shrink-0 h-10 w-10 rounded-full object-cover"
      src={personProfile}
      alt=""
    />
  {/if}
</div>
