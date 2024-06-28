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
    class="z-10 mx-auto max-w-xl text-center flex h-full w-[90%] flex-col justify-center pb-16 pt-8 text-white"
  >
    <p class="max-w-xl mx-auto text-2xl font-light text-black/90"></p>
    <p
      class="text-transparent text-center bg-clip-text bg-gradient-to-br from-gray-700/80 via-gray-700 to-gray-800"
    >
      <span class=" font-bold text-4xl sm:text-5xl lg:text-6xl">
        {data.lang === "es" ? "Testimonios de Clientes" : "Client Testimonials"}
      </span>
      <span class="text-lg font-light"
        ><br />
        {data.lang === "es"
          ? "Vea las otras familias a las que hemos ayudado"
          : "See the other families we've helped"}
      </span>
    </p>
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
          class="absolute grayscale left-0 top-0 h-full w-full object-cover"
          alt="beams"
        />
        <div class="h-full w-full bg-blue-600/20 absolute top-0 left-0"></div>
        <div
          class="absolute bottom-0 left-0 z-10 h-1/2 flex flex-col justify-center items-start bg-gradient-to-b via-gray-100/90 to-gray-100 from-transparent p-4"
        >
          <p class="line-clamp-1 pt-4 text-sm text-blue-600 font-bold">
            {s.company}
          </p>
          <h1 class="text-3xl line-clamp-2 font-light">
            {data.lang === "es" ? s.title.spanish : s.title.english}
          </h1>
        </div>
      </a>
    {/each}
  </section>
</div>
