<script lang="ts">
  export let taskMission: String;
  export let isCompleted: boolean;
  export let experiencePoints: number;
</script>

<div
  class="flex w-full px-3 py-2 my-2 "
>
  <div class="flex-1 w-[60%] flex-row my-auto">
    <p class="font-bold text-l text-[var(--color-text)] truncate">
      {taskMission}
    </p>
    <p class="truncate text-[var(--color-text-inactive)]">
      {isCompleted ? "Completed" : "Incomplete"}
    </p>
  </div>
  <div class="flex m-auto"><h3 class="text-xl font-bold {isCompleted ? "text-green-500 " : "text-red-500"}">{experiencePoints} XP</h3></div>
</div>
