
<script lang="ts">
    import { onMount } from "svelte";
    import { supabase } from "../../../main";
    import leftarrow from "$lib/images/arrow.png"; 
    import { page } from "$app/stores";
    import type { Article } from "./page";
  
    const articleId = $page.params.articleId;
    let article: Article;
    let isLoading = true;
  
    async function fetchArticle() {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", articleId)
        .single();
  
      if (error) {
        console.error("Error fetching article:", error.message);
      } else {
        if (data) {
          article = data;
        } else {
          console.error("Article not found.");
        }
        isLoading = false;
      }
    } 
  
    onMount(fetchArticle);
  </script>
  
  {#if isLoading}
    <div>Loading...</div>
  {:else}
    <div class="-m-4 md:-m-6">
      <div class="flex items-center bg-[#060047] h-[8vh] justify-start px-[15px] w-[100%] md:hidden fixed">
        <a href="/news" class="w-[35px] h-[35px]">
          <img src={leftarrow} alt="" />
        </a>
      </div>
    </div>
  
    <section class="mt-[10vh]">
      <h1 class="text-3xl font-bold tracking-wide mb-3 ">{article.itemTitle}</h1>
      <div class="flex flex-row justify-between mt-5">
        <div class="flex flex-row">
          <img src={article.authorThumbnail} alt="" class="w-[25px] h-[25px] rounded-[50%] mr-2">
          <p>{article.authorTitle}</p>
        </div>
        <p class="text-right">{article.itemCountry}</p>
      </div>
      <img src={article.itemThumbnail} alt="" class="rounded-lg mt-3">
      <div class='mt-5 text-l tracking-wide' style="white-space: pre-line;">
        {article.content}
      </div>
    </section>
  {/if}
  