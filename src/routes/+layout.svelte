<script lang="ts">
  import { fade } from "svelte/transition";
  import toast, { Toaster } from "svelte-french-toast";
  import "../app.css";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const page_lang = data.lang || "en";

  let pages_routes = [
    [`/${page_lang}/home`, "Home", "Inicio"],
    [`/${page_lang}/about`, "About", "Acerca"],
    [`/${page_lang}/cases`, "Cases", "Casos"],
    [`/${page_lang}/faq`, "FAQ", "Preg."],
    [
      "https://insurance-call-center.my.connect.aws/home",
      "Client Portal",
      "Portal del Cliente",
    ],
  ];
</script>

<section class="flex h-screen w-screen overflow-y-scroll bg-gray-100">
  <section class="relative flex h-full w-screen">
    <section class="w-full">
      <slot />
      <footer
        class="flex h-fit min-h-16 w-full flex-col items-center justify-between space-y-2 bg-gray-200 px-4 py-4 text-xs font-light text-gray-600 md:flex-row md:space-y-0"
      >
        <div class="flex divide-x-[1px] divide-gray-400/50">
          {#each pages_routes as pr}
            <a class="line-clamp-1 w-fit px-2" href={pr[0]}
              >{data.lang === "es" ? pr[2] : pr[1]}</a
            >
          {/each}
        </div>
        <p class="">
          Copyright © 2024 Ninoska Martinez Inc. All rights reserved.
        </p>
      </footer>
    </section>
  </section>
</section>

<Toaster />
