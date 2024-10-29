<script>
  import { show_succ_mod } from "$lib/stores.ts";
  import Input from "$lib/Input.svelte";
  import Phone from "$lib/Phone.svelte";
  import { tick } from "svelte";
  import toast from "svelte-french-toast";

  export let data;
  let la = data.lang;
  let company = [
    "/aetna.png",
    "/cigna.png",
    "/blue_cross.png",
    "/united_healthcare.png",
    "/oscar.png",
    "/ambetter.png",
  ];

  let form_p = {
    coverage_type: ["Sí", "No"],
    age_range: ["Sí", "No"],
    medicare_enrolled: ["Sí", "No"],
    annual_income: ["0-50k/año", "50k-100k/año", "100k-200k", "200+"],
    doctor_often: ["Constantemente", "Frecuentemente", "A veces", "Nada"],
    name: {
      value: "",
      placeholder: "Nombre",
      eg: "JUAN",
    },
    phone: "",
  };
  let form_q = {
    coverage_type: ["Yes", "No"],
    age_range: ["Yes", "No"],
    medicare_enrolled: [
      "0 to 6 months",
      "Less than 1 yr.",
      "1 to 2 years",
      "Over 2 years",
    ],
    annual_income: ["0-50k/yr", "50k-100k/yr", "100k-200k", "200+"],
    doctor_often: ["Yes", "No"],
    name: {
      value: "",
      placeholder: "Name",
      eg: "JOH",
    },
    phone: "",
  };

  let customer_data = {
    coverage_type: "",
    name: null,
    phone: "",
    code: "US",
    annual_icon: "",
    medicare_enrolled: "",
    doctor_often: "",
    age_range: "",
  };

  let show = 0;
  let show_percent = 1;
  let show_percent_string = "0%";

  let why_short_term = [
    [
      "Descubre tus Opciones",
      "Explora las opciones disponibles junto a uno de nuestros agentes expertos",
      "Discover COBRA",
      "COBRA permits individuals who participate in an employer’s group health plan, to continue paying for that plan when it would otherwise end.",
    ],
    [
      "Comparte tu Historia",
      "Danos los detalles necesarios para encontrar la mejor opción de seguro para ti",
      "Federally Qualified Plans",
      "Find subsidies to reduce your monthly premium while covering your pre-existing conditions at an affordable rate.",
    ],
  ];
  let how_it_works = [
    [
      "Comparte tu Historia",
      "Danos los detalles necesarios para encontrar la mejor opción de seguro para ti",
      "Share Your Story",
      "Give us the details we need to find the best insurance option for you",
    ],
    [
      "Descubre tus Opciones",
      "Explora las opciones disponibles junto a uno de nuestros agentes expertos",
      "Discover Your Options",
      "Explore the available options with one of our expert agents",
    ],
    [
      "Obtén tu Plan",
      "Consigue el plan de seguro más asequible y adecuado en tu estado",
      "Get Your Plan",
      "Get the most affordable and suitable insurance plan in your state",
    ],
  ];

  $: show_percent = (1 - show / 7).toFixed(2) * 100;
</script>

<section
  class="relative bg-gray-300 w-full h-[80vh] min-h-[30rem] flex flex-col mb-24 justify-between items-center pt-32"
>
  <div class="w-full h-full absolute top-0 left-0 overflow-clip">
    <div
      class="ring-1 -translate-y-1/2 -translate-x-1/2 ring-gray-600/20 scale-125 size-96 absolute top-0 rounded-full left-0"
    ></div>
    <div
      class="ring-1 -translate-y-1/2 -translate-x-1/2 ring-gray-600/30 size-96 absolute top-0 rounded-full left-0"
    ></div>
    <div
      class="ring-1 translate-y-3/4 translate-x-1/2 ring-gray-600/20 scale-150 size-96 absolute right-0 rounded-full bottom-0"
    ></div>
    <div
      class="ring-1 translate-y-1/2 translate-x-1/2 ring-gray-600/30 size-96 absolute right-0 rounded-full bottom-0"
    ></div>
  </div>
  <div
    class="w-[90%] h-full justify-start md:items-center items-start flex flex-col md:grid md:grid-cols-2"
  >
    <div
      class="w-full md:max-w-none max-w-sm mb-auto justify-start md:items-start items-start flex flex-col"
    >
      <p
        class="text-3xl z-10 relative mt-20 sm:text-4xl lg:text-5xl text-transparent text-start bg-clip-text bg-gradient-to-br from-gray-700/80 via-gray-700 to-gray-800 font-bold"
      >
        <span class:hidden={data.lang !== "es"}
          >Regístrese en el seguro de salud del mercado al precio más bajo</span
        >
        <span class:hidden={data.lang === "es"}
          >Affordable<br />Cobra Alternative</span
        >
      </p>
      <p
        class="text-base z-10 md:relative text-transparent text-start bg-clip-text bg-gradient-to-br from-gray-700/80 via-gray-700 to-gray-800 font-bold"
      >
        <span class:hidden={data.lang !== "es"}
          >Regístrese en el seguro de salud del mercado al precio más bajo</span
        >
        <span class="text-base font-light" class:hidden={data.lang === "es"}
          >View the available coverage in your state, with the flexibility to
          apply & enroll online</span
        >
      </p>
    </div>
    <img
      class="h-full top-0 md:relative absolute md:scale-100 scale-75 md:opacity-75 opacity-50 object-cover w-full"
      src="/cobra.tiff"
    />
  </div>
  <div
    class="rounded-3xl bottom-0 absolute bg-gray-100 shadow-xl overflow-clip z-20 translate-y-36 sm:translate-y-24 w-[90%] h-fit max-w-4xl"
  >
    <p
      class:hidden={show >= 7}
      class="w-full flex px-4 justify-between bg-teal-200 text-teal-950 font-bold h-fit text-center py-4"
    >
      <span class="size-5 my-auto"
        ><button
          class:hidden={show === 0}
          class="size-5"
          on:click={() => {
            show = show - 1;
          }}
        >
          <svg
            viewBox="0 0 24 24"
            class="stroke-teal-800 size-full stroke-2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g><g id="SVGRepo_iconCarrier">
              <path
                d="M14.5 17L9.5 12L14.5 7"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g></svg
          ></button
        ></span
      >

      {show === 0
        ? data.lang === "es"
          ? "¿Está buscando cobertura individual o familiar?"
          : "Have you recently lost your job or experienced a reduction in work hours?"
        : show === 1
          ? data.lang === "es"
            ? "¿Cuántos años tiene?"
            : "Were you enrolled in a employer sponsored health insurance plan?"
          : show === 3
            ? data.lang === "es"
              ? "¿Cuál es el ingreso anual total de su hogar?"
              : "What is your household total annual income?"
            : show === 2
              ? data.lang === "es"
                ? "¿Está actualmente inscrito en las Partes A o B de Medicare?"
                : "How long were you enrolled before losing coverage?"
              : show === 4
                ? data.lang === "es"
                  ? "¿Con qué frecuencia ve a un médico?"
                  : "Are you a dependent of someone who had employer-sponsored health coverage?"
                : show === 5
                  ? data.lang === "es"
                    ? "¿Cuál es su nombre?"
                    : "What is your name?"
                  : data.lang === "es"
                    ? "¿Cuál es su número de teléfono?"
                    : "What is your phone number?"}

      <span class="size-5"></span>
    </p>

    <div class="p-8 w-full">
      <div
        class="w-full h-4 rounded-full ring-1 relative ring-gray-600 overflow-clip"
      >
        <div
          class="w-full absolute flex justify-end duration-300 ease-in-out transition-all left-0 top-0 h-4 bg-teal-600 rounded-full"
          style="transform: translateX({-show_percent}%);"
        >
          <p class="text-white ml-auto pr-2 text-xs z-10">
            {(100 - show_percent).toFixed(0)}%
          </p>
        </div>
      </div>

      <div class="w-full relative pt-4 h-32 flex justify-between items-center">
        {#if show < 7}
          {#if data.lang === "es"}
            {#each Object.entries(form_p) as [key, value], i}
              <div
                class:scale-50={show > i || show < i}
                class:-translate-x-full={show > i}
                class:translate-x-full={show < i}
                class:opacity-0={show !== i}
                class:opacity-100={show === i}
                class="w-full h-fit top-4 left-0 absolute duration-300 transition-all grid grid-cols-2 md:flex gap-4 md:space-x-4 justify-evenly"
              >
                {#if show < 7}
                  {#if key === "name"}
                    <div
                      class="flex relative h-full col-span-full flex-col w-full"
                    >
                      <Input
                        boolean_disabled={false}
                        className="w-full"
                        bind:value_place={customer_data.name}
                        placeholder={value.placeholder}
                        placeholder_eg={value.eg}
                      ></Input>
                      <button
                        on:click={() => {
                          console.log(customer_data.name);
                          if (
                            customer_data.name === null ||
                            customer_data.name.length === 0
                          ) {
                            toast("Por favor, escriba su nombre");
                          } else {
                            show = 6;
                          }
                        }}
                        class="rounded-md py-2 w-fit mx-auto max-w-xs px-6 relative font-medium text-lg text-gray-100 bg-teal-600"
                      >
                        {data.lang === "es" ? "Continue" : "Continue"}
                      </button>
                    </div>
                  {:else if key === "phone"}
                    <div
                      class="w-full flex flex-col relative h-full col-span-full"
                    >
                      <Phone
                        bind:code={customer_data.code}
                        valu={data.lang === "es" ? "Teléfono" : "Phone"}
                        bind:number={customer_data.phone}
                      ></Phone>
                      <button
                        on:click={() => {
                          show = 7;
                          $show_succ_mod = true;
                        }}
                        class="rounded-md py-2 w-fit mx-auto max-w-xs px-6 relative font-medium text-lg text-gray-100 bg-teal-600"
                      >
                        {data.lang === "es" ? "Continue" : "Continue"}
                      </button>
                    </div>
                  {:else}
                    {#each value as c}
                      <button
                        class="w-full shadow bg-gray-50 capitalize rounded-xl hover:bg-teal-600 active:scale-95 hover:text-gray-100 duration-300 transition-all h-fit ring-1 ring-gray-200 py-4"
                        on:click={() => {
                          customer_data.age_range = c;
                          show = 1 + i;
                        }}>{c}</button
                      >
                    {/each}
                  {/if}
                {/if}
              </div>
            {/each}
          {:else}
            {#each Object.entries(form_q) as [key, value], i}
              <div
                class:scale-50={show > i || show < i}
                class:-translate-x-full={show > i}
                class:translate-x-full={show < i}
                class:opacity-0={show !== i}
                class:opacity-100={show === i}
                class="w-full h-fit top-4 left-0 absolute duration-300 transition-all grid grid-cols-2 md:flex gap-4 md:space-x-4 justify-evenly"
              >
                {#if show < 7}
                  {#if key === "name"}
                    <div
                      class="flex relative h-full col-span-full flex-col w-full"
                    >
                      <Input
                        boolean_disabled={false}
                        className="w-full h-full min-h-16"
                        bind:value_place={customer_data.name}
                        placeholder={value.placeholder}
                        placeholder_eg={value.eg}
                      ></Input>
                      <button
                        on:click={() => {
                          console.log(customer_data.name);
                          if (
                            customer_data.name === null ||
                            customer_data.name.length === 0
                          ) {
                            toast("Please enter your name");
                          } else {
                            show = 6;
                          }
                        }}
                        class="rounded-md py-2 w-fit mx-auto max-w-xs px-6 relative font-medium text-lg text-gray-100 bg-teal-600"
                      >
                        {data.lang === "es" ? "Continue" : "Continue"}
                      </button>
                    </div>
                  {:else if key === "phone"}
                    <div
                      class="w-full flex flex-col relative h-full col-span-full"
                    >
                      <Phone
                        bind:code={customer_data.code}
                        valu={data.lang === "es" ? "Teléfono" : "Phone"}
                        bind:number={customer_data.phone}
                      ></Phone>
                      <button
                        on:click={() => {
                          if (
                            customer_data.phone === null ||
                            customer_data.phone.length < 8
                          ) {
                            toast("Please enter your phone number");
                          } else {
                            show = 7;
                            $show_succ_mod = true;
                          }
                        }}
                        class="rounded-md py-2 w-fit mx-auto max-w-xs px-6 relative font-medium text-lg text-gray-100 bg-teal-600"
                      >
                        {data.lang === "es" ? "Continue" : "Continue"}
                      </button>
                    </div>
                  {:else}
                    {#each value as c}
                      <button
                        class="w-full shadow bg-gray-50 capitalize rounded-xl hover:bg-teal-600 active:scale-95 hover:text-gray-100 duration-300 transition-all h-fit ring-1 ring-gray-200 py-4"
                        on:click={() => {
                          customer_data.age_range = c;
                          show = 1 + i;
                        }}>{c}</button
                      >
                    {/each}
                  {/if}
                {/if}
              </div>
            {/each}
          {/if}
        {:else}
          <div class="m-auto flex flex-col">
            <p class="col-span-full w-full text-gray-600 mb-4 max-w-xs mx-auto">
              We are calling right now
            </p>
            <div class="grid grid-cols-3 h-fit m-auto w-full max-w-12">
              {#each Array.from({ length: 3 }) as _, i}
                <div
                  class="size-2 bg-gray-600 grow rounded-full m-auto"
                  class:grow={i === 0}
                  class:grow1={i === 1}
                  class:grow2={i === 2}
                ></div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>
<div
  class="w-[90%] max-w-xl pt-16 grid grid-cols-3 sm:flex justify-evenly items-center"
>
  {#each company as c}
    <img src={c} class="size-16 object-contain mx-auto" />
  {/each}
</div>
<div class="w-[80%] mt-4 max-w-sm h-[1px] bg-gray-200"></div>
<p class="font-bold text-gray-500">
  {data.lang === "es" ? "Cómo funciona" : "Temporary Insurance"}
</p>
<div class="w-[90%] grid gap-6 pt-8 grid-cols-1 sm:grid-cols-[1fr_300px]">
  <div class="mx-auto max-w-3xl">
    <p
      class="text-2xl sm:text-3xl text-start lg:text-4xl max-w-2xl text-gray-700 font-bold"
    >
      {data.lang === "es"
        ? "Una manera fácil y eficiente de encontrar el plan de seguro de salud perfecto!"
        : "Why get Short-Term Health Insurance?"}
    </p>
    <p
      class="text-base sm:text-lg text-start lg:text-xl max-w-3xl my-4 text-gray-500 font-light"
    >
      {data.lang === "es"
        ? "Simplifique su búsqueda de los mejores planes de seguro con Alex Consulting. Nuestro equipo dedicado le ayudará a encontrar la cobertura más rentable que se ajuste a sus necesidades."
        : "A Short Term Medical Plan can help you with basic medical coverage during a gap in insurance coverage."}
    </p>
    <div class=" gap-6 w-[90%] max-w-4xl">
      {#each why_short_term as hiw}
        <div class="w-full h-fit text-start mt-4 rounded-2xl">
          <p class="text-xl text-gray-500 font-bold">
            {data.lang === "es" ? hiw[0] : hiw[2]}
          </p>
          <p class="text-lg text-gray-500 font-light">
            {data.lang === "es" ? hiw[1] : hiw[3]}
          </p>
        </div>
      {/each}
    </div>
  </div>
  <div
    class="rounded-lg aspect-square max-w-xs w-full mx-auto bg-teal-500"
  ></div>
</div>

<div class="w-[80%] mt-8 max-w-sm h-[1px] bg-gray-200"></div>
<p class="font-bold text-gray-500">
  {data.lang === "es" ? "Cómo funciona" : "Our Process"}
</p>
<div class="w-[90%]">
  <p
    class="text-2xl sm:text-3xl text-center lg:text-4xl max-w-2xl mx-auto text-gray-700 font-bold"
  >
    {data.lang === "es"
      ? "Una manera fácil y eficiente de encontrar el plan de seguro de salud perfecto!"
      : "An easy and efficient way to discover the perfect health insurance plan!"}
  </p>
  <p
    class="text-base sm:text-lg text-center lg:text-xl max-w-3xl mx-auto my-4 text-gray-500 font-light"
  >
    {data.lang === "es"
      ? "Simplifique su búsqueda de los mejores planes de seguro con Alex Consulting. Nuestro equipo dedicado le ayudará a encontrar la cobertura más rentable que se ajuste a sus necesidades."
      : "Simplify your search for the best insurance plans with Alex Consulting. Our dedicated team will assist you in finding the most cost-effective coverage that meets your needs."}
  </p>
</div>
<div class="grid md:grid-cols-3 gap-6 w-[90%] max-w-4xl">
  {#each how_it_works as hiw}
    <div class="w-full bg-gray-50 shadow p-8 h-fit text-center rounded-2xl">
      <p class="text-2xl text-gray-800 font-bold">
        {data.lang === "es" ? hiw[0] : hiw[2]}
      </p>
      <p class="text-lg text-gray-500 font-light">
        {data.lang === "es" ? hiw[1] : hiw[3]}
      </p>
    </div>
  {/each}
</div>
<section class="my-16 h-full w-fit sm:max-w-none max-w-sm">
  <div class="flex h-full w-full flex-col items-center justify-center">
    <div
      class="mx-auto group flex sm:hidden flex-col shadow-2xl justify-between font-serif p-8 min-h-80 bg-teal-600 w-full text-gray-50 mb-4 h-full aspect-[9/11] rounded-lg ring-1 relative ring-black/10"
    >
      <div>
        <p class="text-3xl">Hopefully the yeas<br /> ends before you do</p>
        <p class="text-lg text-teal-100 mt-auto">
          Protect yourself from your employer
        </p>
      </div>
      <div class="flex flex-row-reverse text-end items-end justify-between">
        <div class="flex flex-col justify-end">
          <p class="font-bold">Cobra Insurance</p>
          <span class="font-light text-teal-200">Here for lifes downfalls</span>
        </div>
        <div>
          <button
            on:click={() => {
              tick();
              const element = document.getElementById("top_of_page");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            class="mx-auto rounded-full ring-1 ring-teal-100 border-t-[1px] border-teal-600 bg-teal-100 px-3 mt-4 py-2 text-base font-semibold text-teal-600 shadow"
            >{data.lang === "es" ? "Rodar ahora" : "Enroll now"}
          </button>
        </div>
      </div>
    </div>
    <div
      class="mx-auto group sm:flex hidden sm:scale-[70%] sm:w-[48rem] md:scale-[90%] lg:scale-100 flex-col max-h-96 shadow-2xl justify-between font-serif p-8 min-h-80 bg-teal-600 w-full text-gray-50 mb-4 h-full rounded-lg ring-1 relative ring-black/10"
    >
      <div>
        <p class="text-4xl">Hopefully the year ends<br /> before you do</p>
        <p class="text-lg mt-auto">Protect yourself from your employer</p>
      </div>
      <div class="flex items-end justify-between">
        <div>
          <button
            on:click={() => {
              tick();
              const element = document.getElementById("top_of_page");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            class="mx-auto rounded-full ring-1 ring-teal-100 border-t-[1px] border-teal-600 bg-teal-100 px-8 mt-4 py-2 text-lg font-semibold text-teal-600 shadow"
            >{data.lang === "es" ? "Rodar ahora" : "Enroll now"}
          </button>
        </div>
        <p class="font-bold">
          Cobra Insurance<span class="font-light ml-2 text-gray-200"
            >Here for lifes downfalls</span
          >
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes grow {
    0% {
      transform: scale(1);
    }
    20% {
      transform: scale(1.25);
    }
    40% {
      transform: scale(1);
    }
  }
  .grow {
    animation: grow 2s ease-in-out infinite;
    animation-delay: 3s;
  }
  @keyframes grow1 {
    20% {
      transform: scale(1);
    }
    40% {
      transform: scale(1.25);
    }
    60% {
      transform: scale(1);
    }
  }
  .grow1 {
    animation: grow1 2s ease-in-out infinite;
    animation-delay: 3s;
  }
  @keyframes grow2 {
    40% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.25);
    }
    80% {
      transform: scale(1);
    }
  }
  .grow2 {
    animation: grow2 2s ease-in-out infinite;
    animation-delay: 3s;
  }
</style>
