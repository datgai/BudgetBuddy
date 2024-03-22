<script>
  // @ts-nocheck

  export let graphSrc;
  export let message;
</script>

<div>
  <h3 class="text-lg">Overview</h3>
  <div class="relative rounded-lg my-2 rounded-[20px]">
    <img
      src={graphSrc}
      alt=""
      class="shadow-[rgba(0,0,0,0.16)_0px_1px_4px,rgb(51,51,51)_0px_0px_0px_3px] rounded-[20px]"
    />
    <p
      class="absolute text-[13px] w-[200px] text-center bg-gradient-to-r from-fuchsia-700 to-purple-700 shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_1px_3px_1px] -translate-x-2/4 p-[7px] rounded-[30px] left-[55%] top-[70%] ; text-wrap: wrap opacity-90">
      {message}
    </p>
  </div>
</div>
