<script>
  import MobileHeader from "$lib/components/MobileHeader.svelte";
  import TaskItem from "$lib/components/TaskItem.svelte";
</script>

<svelte:head>
  <title>Tasks</title>
</svelte:head>

<div>
  <MobileHeader />
  <div>
    <h2 class="my-2 text-3xl font-bold">Tasks</h2>
  </div>

  <div
    class="flex flex-col mx-2 my-4 px-2 py-6 cardGradientBackground shadowEffect rounded-[var(--card-border-radius)]"
  >
    <div class="my-4 mx-auto w-80">
      <p
        class="font-bold text-xl text-[var(--color-text)] truncate text-center"
      >
        Level 12
      </p>
      <div
        class="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-white border border-indigo-500 shadowEffect"
      >
        <div
          class="bg-blue-600 h-4 rounded-full dark:bg-blue-500 shadowEffect"
          style="width: 45%"
        ></div>
      </div>
      <div class="flex flex-row mx-auto justify-center">
        <p
          class="font-bold text-xl text-[var(--color-text)] truncate text-center mx-2"
        >
          View Rewards
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mx-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </div>
    </div>
  </div>
  <div class="flex flex-col gap-y-4">
    <div>
      <h2 class="text-2xl font-bold">Daily</h2>
      <div
        class="flex flex-col mx-2 my-2 px-2 py-6 cardGradientBackground shadowEffect rounded-[var(--card-border-radius)]"
      >
        <TaskItem taskMission="Login" isCompleted={true} experiencePoints={10}
        ></TaskItem>
        <TaskItem
          taskMission="Record a transaction"
          isCompleted={false}
          experiencePoints={20}
        ></TaskItem>
        <TaskItem
          taskMission="Check the news"
          isCompleted={false}
          experiencePoints={10}
        ></TaskItem>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold">Weekly</h2>
      <div
        class="flex flex-col mx-2 my-2 px-2 py-6 cardGradientBackground shadowEffect rounded-[var(--card-border-radius)]"
      >
        <TaskItem taskMission="7-Day login streak" isCompleted={true} experiencePoints={10}
        ></TaskItem>
        <TaskItem
          taskMission="Record 10 transactions"
          isCompleted={false}
          experiencePoints={20}
        ></TaskItem>
        <TaskItem
          taskMission="Join a text-channel"
          isCompleted={false}
          experiencePoints={10}
        ></TaskItem>
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold">Monthly</h2>
      <div
        class="flex flex-col mx-2 my-2 px-2 py-6 cardGradientBackground shadowEffect rounded-[var(--card-border-radius)]"
      >
        <TaskItem taskMission="30-Day login streak" isCompleted={true} experiencePoints={10}
        ></TaskItem>
        <TaskItem
          taskMission="Record 30 transaction"
          isCompleted={false}
          experiencePoints={20}
        ></TaskItem>
        <TaskItem
          taskMission="Check 20 news"
          isCompleted={false}
          experiencePoints={10}
        ></TaskItem>
      </div>
    </div>
  </div>
</div>
