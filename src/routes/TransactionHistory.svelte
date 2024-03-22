<script>
// @ts-nocheck

    export let icon;
    export let title;
    export let date;
    export let amount;
  </script>
  
  <div class="bg-gradient-to-r from-blue-800 to-indigo-900 p-4 rounded-2xl my-2 shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px] p-[5px]">
    <div class="my-2 flex gap-x-[30px] justify-center items-center">
      <img src={icon} class="w-20 h-20 rounded-2xl" alt="" />
      <div>
        <p class="text-xl">{title}</p>
        <p class="text-[gainsboro] text-[0.9rem]">{date}</p>
      </div>
      <div class="text-[red] font-semibold text-[1.1rem] tracking-wider">{amount}</div>
    </div>
  </div>
  