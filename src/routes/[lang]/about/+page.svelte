<script lang="ts">
  import { caseStudies } from "$lib/content/featured_cases.js";
  import { services } from "$lib/content/offered_services.js";
  import { benefits } from "$lib/content/benefits.ts";

  let phone = 12345;
  export let data;
</script>

<div
  class="relative flex h-[70vh] min-h-[30rem] w-full items-center justify-between overflow-clip bg-gradient-to-b from-neutral-600 via-neutral-600/90 to-neutral-600/60 pt-16"
>
  <img
    alt="banner"
    class="absolute left-0 top-0 h-full w-full object-cover opacity-10 grayscale"
    src="/family.webp"
  />
  <div
    class="z-10 mx-auto text-center flex h-full w-[90%] flex-col justify-center pb-16 pt-8 text-white"
  >
    <p class="max-w-xl mx-auto text-2xl font-light text-white/90">
      <span
        class="text-4xl sm:text-5xl lg:text-6xl text-transparent text-center bg-clip-text bg-gradient-to-br from-gray-50/80 via-gray-50 to-gray-200 font-bold"
      >
        {data.lang === "es"
          ? "Profesional de seguros médicos"
          : "Health Insurance Professional"}
        <br />{data.lang === "es" ? " de Tampa" : " of Tampa"}<br />
      </span>
      {data.lang === "es"
        ? "Haga clic a continuación para comenzar y configurar en menos de 15 minutos"
        : "Click below to get started, and set up in less than 15 minutes"}
    </p>

    <a
      href="/{data.lang}/home"
      class="mt-8 w-fit rounded-full mx-auto bg-blue-500 px-16 py-1 text-xl font-medium text-blue-100 shadow hover:opacity-50"
      >{data.lang === "es" ? "Llama ahora" : "Enroll now"}</a
    >
  </div>
</div>
<div
  class="relative mx-auto flex h-auto w-full flex-col sm:flex-row sm:space-x-8"
>
  <div class="relative mx-auto flex h-auto w-full flex-col">
    <div
      class="mx-auto w-full gap-6 bg-gradient-to-b from-neutral-600/60 via-neutral-600/10 to-transparent"
    >
      <div
        class="mx-auto grid w-[90%] grid-cols-1 gap-6 max-w-4xl md:grid-cols-2"
      >
        {#each services as s}
          <div
            class="trasition-all h-fit w-full -translate-y-8 rounded-xl bg-gray-50 p-4 shadow duration-200 hover:shadow-xl"
          >
            <p class="font-serif text-xl text-gray-800 sm:text-2xl">
              {data.lang === "es" ? s.title : s.english_title}
            </p>
            <p class=" font-light text-gray-600 sm:text-lg">
              {data.lang === "es" ? s.detail : s.english_detail}
            </p>
          </div>
        {/each}
      </div>
    </div>
    <div class="mx-auto h-auto w-[90%] max-w-7xl pt-16">
      <section
        class="grid h-fit grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {#each benefits as s}
          <div class="flex h-min w-full items-start space-x-4">
            <div class="size-10 rounded-full bg-gray-200 p-2">
              <img class="size-full" src={`/about/${s[0]}`} />
            </div>
            <div class=" mt-2 w-fit max-w-xs">
              <h1 class="text-xl font-semibold text-gray-900">
                {data.lang === "es" ? s[3] : s[1]}
              </h1>

              <p class="text-lg font-light">
                {data.lang === "es" ? s[4] : s[2]}
              </p>
            </div>
          </div>{/each}
      </section>
    </div>
    <div class="w-[80%] mx-auto max-w-sm h-[1px] bg-gray-200"></div>
    <p class="font-bold mx-auto text-gray-500 mb-8">
      {data.lang === "es" ? "Cómo funciona" : "Client Stories"}
    </p>
    <div class="w-[90%] mx-auto">
      <p
        class="text-2xl sm:text-3xl text-center lg:text-4xl max-w-2xl mx-auto text-gray-700 font-bold"
      >
        {data.lang === "es"
          ? "Historias de clientes satisfechos"
          : "Stories of Satisfied Clients"}
      </p>
      <p
        class="text-base sm:text-lg text-center lg:text-xl max-w-3xl mx-auto my-4 text-gray-500 font-light"
      >
        {data.lang === "es"
          ? "Descubra cómo Alex Consulting ha ayudado a familias a encontrar el plan de seguro médico perfecto. Lea nuestras historias de éxito y vea cómo podemos ayudarle a usted también."
          : "Discover how Alex Consulting has helped families find the perfect health insurance plan. Read our success stories and see how we can help you too."}
      </p>
    </div>
    <section class="mx-auto grid w-[90%] max-w-6xl gap-12 sm:grid-cols-2">
      {#each caseStudies as s, i}
        {#if i <= 1}
          <a
            href={`/${data.lang}/cases/${s.id}`}
            class="aspect-auto h-fit max-h-[35rem] w-full rounded-xl bg-gray-100 p-8 shadow-2xl"
          >
            <img
              src={"/beams.jpg"}
              class="aspect-video w-full pb-4"
              alt="beams"
            />
            <div>
              <h1 class="text-2xl font-medium">
                {data.lang === "es" ? s.title.spanish : s.title.english}
              </h1>
              <p class="line-clamp-4 pt-4 font-light">
                {data.lang === "es" ? s.detail.spanish : s.detail.english}
              </p>
            </div>
          </a>
        {/if}
      {/each}
    </section>
  </div>
</div>
