<script lang="ts">
  import { enhance } from "$app/forms";
  import AvatarUpload from "$lib/components/AvatarUpload.svelte";
  import type { SubmitFunction } from "@sveltejs/kit";

  export let data;

  let { session, supabase, user, profile } = data;
  $: ({ session, supabase, user, profile } = data);

  let profileForm: HTMLFormElement;
  let loading = false;

  const handleSubmit: SubmitFunction = () => {
    loading = true;
    return async () => {
      loading = false;
    };
  };
</script>

<div class="form-widget">
  <form
    method="POST"
    action="?/profileUpdate"
    use:enhance={handleSubmit}
    bind:this={profileForm}
  >
    <AvatarUpload
      {supabase}
      url={profile?.avatar_url}
      size={10}
      on:upload={() => {
        profileForm.requestSubmit();
      }}
    />

    <div>
      <label for="email">Email</label>
      <input id="email" type="text" value={user?.email} disabled />
    </div>

    <div>
      <label for="username">Username</label>
      <input name="username" type="text" value={profile?.username} />
    </div>

    <div>
      <label for="phoneNumber">Phone Number</label>
      <input name="phoneNumber" type="text" value={profile?.phone_number} />
    </div>

    <div>
      <button type="submit" class="button block primary" disabled={loading}
        >{loading ? "Loading..." : "Update"}</button
      >
    </div>
  </form>
</div>
