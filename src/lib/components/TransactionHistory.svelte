<script>
// @ts-nocheck

    export let icon;
    export let title;
    export let date;
    export let amount;
  </script>
  
  <div class="bg-[#104c85] p-4 rounded-lg my-2 cardGradientBackground shadowEffect p-[5px]">
    <div class="my-2 flex gap-x-[30px] justify-center items-center">
      <img src={icon} class="rounded-lg w-20 h-20" alt="" />
      <div>
        <p class="text-xl">{title}</p>
        <p class="text-[gainsboro] text-[0.9rem]">{date}</p>
      </div>
      <div class="text-[red] font-semibold text-[1.1rem] tracking-wider">{amount}</div>
    </div>
  </div>
  