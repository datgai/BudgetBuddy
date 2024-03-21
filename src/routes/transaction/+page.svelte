<script>
  import "../styles.css";
  import expenses_graph from "$lib/images/expenses.png";
  import amazon_icon from "$lib/images/amazon.jpg";
</script>

<div class="container my-24 md:px-6 p-2">
  <!-- Top Bar -->
  <h2 class="mb-5 text-3xl font-bold">Transactions</h2>

  <!-- Overview -->
  <div class="p-4">
    <h3 class="text-lg">Overview</h3>
    <div class="relative bg-purple-700 rounded-lg my-2 rounded-[20px]">
      <img
        src={expenses_graph}
        alt=""
        class="shadow-[rgba(0,0,0,0.16)_0px_1px_4px,rgb(51,51,51)_0px_0px_0px_3px] rounded-[20px]"
      />
      <p
        class="absolute text-[13px] w-[200px] text-center bg-[purple] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_1px_3px_1px] -translate-x-2/4 p-[7px] rounded-[30px] left-[55%] top-[70%] ;
    text-wrap: wrap"
      >
        Your spending decreased from 5% the last week. Good job!
      </p>
    </div>
  </div>

  <div class="p-4">
    <h3 class="text-lg">History</h3>
    <div
      class="bg-[#104c85] p-4 rounded-lg my-2 shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px] p-[5px]"
    >
      <div class="my-2 flex gap-x-[30px] justify-center items-center">
        <img src={amazon_icon} class="w-20 h-20" alt="" />
        <div class="">
          <p class="text-xl">Amazon</p>
          <p class="text-[gainsboro] text-[0.9rem]">May 24, 2022</p>
        </div>
        <div class="text-[red] font-semibold text-[1.1rem]">- RM103.56</div>
      </div>
    </div>
    <div
      class="bg-[#104c85] p-4 rounded-lg my-2 shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px] p-[5px]"
    >
      <div class="my-2 flex gap-x-[30px] justify-center items-center">
        <img src={amazon_icon} class="w-20 h-20" alt="" />
        <div class="">
          <p class="text-xl">Amazon</p>
          <p class="text-[gainsboro] text-[0.9rem]">May 24, 2022</p>
        </div>
        <div class="text-[red] font-semibold text-[1.1rem]">- RM103.56</div>
      </div>
    </div>
    <div
      class="bg-[#104c85] p-4 rounded-lg my-2 shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px] p-[5px]"
    >
      <div class="my-2 flex gap-x-[30px] justify-center items-center">
        <img src={amazon_icon} class="w-20 h-20" alt="" />
        <div class="">
          <p class="text-xl">Amazon</p>
          <p class="text-[gainsboro] text-[0.9rem]">May 24, 2022</p>
        </div>
        <div class="text-[red] font-semibold text-[1.1rem]">- RM103.56</div>
      </div>
    </div>
    <div
      class="bg-[#104c85] p-4 rounded-lg my-2 shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px] p-[5px]"
    >
      <div class="my-2 flex gap-x-[30px] justify-center items-center">
        <img src={amazon_icon} class="w-20 h-20" alt="" />
        <div class="">
          <p class="text-xl">Amazon</p>
          <p class="text-[gainsboro] text-[0.9rem]">May 24, 2022</p>
        </div>
        <div class="text-[red] font-semibold text-[1.1rem]">- RM103.56</div>
      </div>
    </div>
    <div
      class="bg-[#104c85] p-4 rounded-lg my-2 shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px] p-[5px]"
    >
      <div class="my-2 flex gap-x-[30px] justify-center items-center">
        <img src={amazon_icon} class="w-20 h-20" alt="" />
        <div class="">
          <p class="text-xl">Amazon</p>
          <p class="text-[gainsboro] text-[0.9rem]">May 24, 2022</p>
        </div>
        <div class="text-[red] font-semibold text-[1.1rem]">- RM103.56</div>
      </div>
    </div>
    <div
      class="bg-[#104c85] p-4 rounded-lg my-2 shadow-[rgba(0,0,0,0.07)_0px_1px_2px,rgba(0,0,0,0.07)_0px_2px_4px,rgba(0,0,0,0.07)_0px_4px_8px,rgba(0,0,0,0.07)_0px_8px_16px,rgba(0,0,0,0.07)_0px_16px_32px,rgba(0,0,0,0.07)_0px_32px_64px] p-[5px]"
    >
      <div class="my-2 flex gap-x-[30px] justify-center items-center">
        <img src={amazon_icon} class="w-20 h-20" alt="" />
        <div class="">
          <p class="text-xl">Amazon</p>
          <p class="text-[gainsboro] text-[0.9rem]">May 24, 2022</p>
        </div>
        <div class="text-[red] font-semibold text-[1.1rem]">- RM103.56</div>
      </div>
    </div>
  </div>
</div>
