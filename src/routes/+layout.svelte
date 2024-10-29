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
  ];
</script>

<svelte:head>
  <title
    >Cobra Insure | Health insurance agent ceritified throughout South Florida</title
  >

  <meta
    property="og:title"
    content="CobraInsure connects you to licensed insurance agents to discuss your eligibility for COBRA Insurance."
  />
  <meta
    property="twitter:title"
    content="CobraInsure connects you to licensed insurance agents to discuss your eligibility for COBRA Insurance."
  />
  <meta
    name="description"
    content="CobraInsure connects you to licensed insurance agents to discuss your eligibility for COBRA Insurance."
  />
  <meta
    property="og:description"
    content="CobraInsure connects you to licensed insurance agents to discuss your eligibility for COBRA Insurance."
  />
  <meta
    property="twitter:description"
    content="Alexander is a healthcare insurance agent dedicated to getting his clients the maximum value for their dollar."
  />
  <meta property="og:image" content="/icon.svg" />
  <meta property="og:url" content="cobrainsure.org" />
  <meta property="twitter:url" content="cobrainsure.org" />
</svelte:head>

<section class="flex h-screen w-screen overflow-y-scroll bg-gray-100">
  <section class="relative flex h-full w-screen">
    <section class="w-full">
      <slot />
      <footer
        class="flex h-fit min-h-16 w-full text-center md:text-end flex-col items-center justify-between space-y-2 bg-gray-200 px-4 py-4 text-xs font-light text-gray-600 md:flex-row md:space-y-0"
      >
        <div class="flex divide-x-[1px] divide-gray-400/50">
          <button>Enroll Now</button>
        </div>
        {#if data.lang === "es"}
          <p class="">
            Copyright © 2024 Cobra Insure Inc. Todos los derechos reservados.
            <br />
            <i>Número de licencia: G1341031 </i>
          </p>
        {:else}
          <p>
            Copyright © 2024 CobraInsure Inc. All rights reserved.
            <br />
            <i class="mx-auto"> License number: G1341031 </i>
          </p>
        {/if}
      </footer>
    </section>
  </section>
</section>

<Toaster />
