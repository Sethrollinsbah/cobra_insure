<script>
  import { caseStudies } from "$lib/content/featured_cases.ts";

  export let data;
  let services = [
    ["privacy.svg", "Privacy"],
    ["warnings.svg", "Warning"],
    ["location.svg", "Locations"],
    ["book.svg", "Research"],
    ["globe.svg", "Location agnostic"],
    ["bank.svg", "Financing options"],
  ];
  let service = [[], []];
  let phone = 12345;
</script>

<div
  class=" relative h-fit min-h-[70vh] w-full items-center justify-center overflow-clip rounded-b-[5rem] bg-gradient-to-b from-transparent to-blue-200 pb-16 pt-32"
>
  <div
    class="z-10 mx-auto text-center flex h-full w-[90%] flex-col justify-center pb-16 pt-8 text-white"
  >
    <p class="max-w-xl mx-auto text-2xl font-light text-black/90"></p>
    <p
      class="text-4xl sm:text-5xl lg:text-6xl text-transparent text-center bg-clip-text bg-gradient-to-br from-gray-700/80 via-gray-700 to-gray-800 font-bold"
    >
      {data.lang === "es"
        ? "Regístrese en el seguro de salud del mercado al precio más bajo"
        : "Sign up for marketplace health insurance at the most affordable rate"}
      <span class="text-lg font-light"
        ><br />
        {data.lang === "es"
          ? "Haga clic a continuación para comenzar y configurar en menos de 15 minutos"
          : "Click below to get started, and set up in less than 15 minutes"}
      </span>
    </p>

    <a
      href="/{data.lang}/home"
      class="mt-8 w-fit rounded-full mx-auto bg-blue-500 px-16 py-1 text-xl font-medium text-blue-100 shadow hover:opacity-50"
      >{data.lang === "es" ? "Llama ahora" : "Enroll now"}</a
    >
  </div>
  <img
    class="absolute left-0 top-0 h-full w-full object-cover opacity-10"
    src="https://gginvestigator.com/wp-content/themes/yootheme/cache/f1/background-searches-scaled-f12758be.jpeg"
  />
</div>

<div class="mx-auto h-auto w-[90%] max-w-7xl pt-16">
  <section
    class="mx-auto grid h-fit w-[90%] gap-y-12 sm:gap-4 md:grid-cols-2 xl:grid-cols-3"
  >
    {#each caseStudies as s, i}
      <a
        href={`/${data.lang}/cases/${s.id}`}
        class="group relative grid aspect-auto h-96 w-full overflow-clip rounded-md ring-1 ring-gray-300"
      >
        <img
          src={s.image}
          class="absolute left-0 top-0 h-full w-full object-cover pb-4"
          alt="beams"
        />
        <div
          class="absolute bottom-0 left-0 z-10 h-fit bg-gradient-to-b from-transparent via-gray-100/60 to-gray-100 p-4"
        >
          <p class="line-clamp-1 pt-4 text-sm font-medium">{s.company}</p>
          <h1 class="text-3xl font-light">
            {data.lang === "es" ? s.title.spanish : s.title.english}
          </h1>
        </div>
      </a>
    {/each}
  </section>
</div>
