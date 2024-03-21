<script>
  import "../styles.css";
  import Profile from "../Profile.svelte";
  import TaskItem from "../TaskItem.svelte";
</script>

<svelte:head>
  <title>Tasks</title>
  <meta name="description" content="About this app" />
</svelte:head>

<div class="container my-24 md:px-6 p-5">
  <header class="flex">
    <div class="flex-1">Brand</div>
    <Profile />
  </header>

  <h2 class="mb-8 text-3xl font-bold">Tasks</h2>
  <div
    class="flex flex-col mx-2 my-2 px-2 py-6 bg-[color:var(--color-theme-1)] backdrop-blur-lg rounded-[30px]"
  >
    <div class="my-4 mx-auto w-80">
      <p
        class="font-bold text-xl text-[var(--color-text)] truncate text-center"
      >
        Level 12
      </p>
      <div
        class="w-full bg-gray-200 rounded-full h-4 mb-4 dark:bg-white border border-indigo-500"
      >
        <div
          class="bg-blue-600 h-4 rounded-full dark:bg-blue-500"
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

  <h2 class="mb-8 text-2xl font-bold">Daily</h2>
  <div
    class="flex flex-col mx-2 my-2 px-2 py-6 bg-[color:var(--color-theme-1)] backdrop-blur-lg rounded-[30px]"
  >
    <TaskItem taskMission="Login" isCompleted="Completed" experiencePoints="10"
    ></TaskItem>
    <TaskItem
      taskMission="Record a transaction"
      isCompleted="Incomplete"
      experiencePoints="10"
    ></TaskItem>
    <TaskItem
      taskMission="Check the news"
      isCompleted="Incomplete"
      experiencePoints="10"
    ></TaskItem>
  </div>

  <h2 class="mb-8 text-2xl font-bold">Weekly</h2>
  <div
    class="flex flex-col mx-2 my-2 px-2 py-6 bg-[color:var(--color-theme-1)] backdrop-blur-lg rounded-[30px]"
  >
    <TaskItem taskMission="Login" isCompleted="Completed" experiencePoints="10"
    ></TaskItem>
    <TaskItem
      taskMission="Record a transaction"
      isCompleted="Incomplete"
      experiencePoints="10"
    ></TaskItem>
    <TaskItem
      taskMission="Check the news"
      isCompleted="Incomplete"
      experiencePoints="10"
    ></TaskItem>
  </div>

  <h2 class="mb-8 text-2xl font-bold">Monthly</h2>
  <div
    class="flex flex-col mx-2 my-2 px-2 py-6 bg-[color:var(--color-theme-1)] backdrop-blur-lg rounded-[30px]"
  >
    <TaskItem taskMission="Login" isCompleted="Completed" experiencePoints="10"
    ></TaskItem>
    <TaskItem
      taskMission="Record a transaction"
      isCompleted="Incomplete"
      experiencePoints="10"
    ></TaskItem>
    <TaskItem
      taskMission="Check the news"
      isCompleted="Incomplete"
      experiencePoints="10"
    ></TaskItem>
  </div>
</div>
