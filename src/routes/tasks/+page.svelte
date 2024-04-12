<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { supabase } from "../../main";
  import TaskItem from "$lib/components/TaskItem.svelte";

  let dailyTasks: any[] = [];
  let weeklyTasks: any[] = [];
  let monthlyTasks: any[] = [];

  onMount(async () => {
    await fetchTasks();
  });

  onDestroy(() => {
    // Clean up if needed
  });

  async function fetchTasks() {
    const { data: dailyData, error: dailyError } = await supabase.from('tasks').select('*').eq('category', 'daily');
    if (dailyError) {
      console.error('Error fetching daily tasks:', dailyError.message);
    } else {
      dailyTasks = dailyData;
    }

    const { data: weeklyData, error: weeklyError } = await supabase.from('tasks').select('*').eq('category', 'weekly');
    if (weeklyError) {
      console.error('Error fetching weekly tasks:', weeklyError.message);
    } else {
      weeklyTasks = weeklyData;
    }

    const { data: monthlyData, error: monthlyError } = await supabase.from('tasks').select('*').eq('category', 'monthly');
    if (monthlyError) {
      console.error('Error fetching monthly tasks:', monthlyError.message);
    } else {
      monthlyTasks = monthlyData;
    }
  }
</script>

<svelte:head>
  <title>Tasks</title>
</svelte:head>

<div>
  <div>
    <h2 class="my-2 text-3xl font-bold">Tasks</h2>
  </div>

  <div class="flex flex-col gap-y-4">
    <div>
      <h2 class="text-2xl font-bold">Daily</h2>
      <div class="flex flex-col mx-2 my-2 px-2 py-6 cardGradientBackground shadowEffect rounded-[var(--card-border-radius)]">
        {#each dailyTasks as task}
          <TaskItem
            taskMission={task.taskMission}
            isCompleted={task.isCompleted}
            experiencePoints={task.experiencePoints}
          />
        {/each}
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold">Weekly</h2>
      <div class="flex flex-col mx-2 my-2 px-2 py-6 cardGradientBackground shadowEffect rounded-[var(--card-border-radius)]">
        {#each weeklyTasks as task}
          <TaskItem
            taskMission={task.taskMission}
            isCompleted={task.isCompleted}
            experiencePoints={task.experiencePoints}
          />
        {/each}
      </div>
    </div>

    <div>
      <h2 class="text-2xl font-bold">Monthly</h2>
      <div class="flex flex-col mx-2 my-2 px-2 py-6 cardGradientBackground shadowEffect rounded-[var(--card-border-radius)]">
        {#each monthlyTasks as task}
          <TaskItem
            taskMission={task.taskMission}
            isCompleted={task.isCompleted}
            experiencePoints={task.experiencePoints}
          />
        {/each}
      </div>
    </div>
  </div>
</div>
