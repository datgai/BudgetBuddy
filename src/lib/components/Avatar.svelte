<script lang="ts">
  import type { SupabaseClient } from "@supabase/supabase-js";
  export let supabase: SupabaseClient;
  export let size = 10;
  export let url: string;

  let avatarUrl: string | null = null;

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from("avatars")
        .download(path);

      if (error) {
        throw error;
      }

      const url = URL.createObjectURL(data);
      avatarUrl = url;
    } catch (error) {
      if (error instanceof Error) {
        console.log("Error downloading image: ", error.message);
      }
    }
  };

  $: if (url) downloadImage(url);
</script>

<div>
  {#if avatarUrl}
    <img
      src={avatarUrl}
      alt={avatarUrl ? "Avatar" : "No image"}
      class="rounded-full border-4 border-indigo-500"
      height="{size}px"
      width="{size}px"
    />
  {:else}
    <div class="avatar no-image" style="height: {size}em; width: {size}em;" />
  {/if}
</div>
