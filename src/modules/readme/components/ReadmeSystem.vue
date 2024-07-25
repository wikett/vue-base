<script setup lang="ts">
const technology = [
  {
    image: '/img/technology/vue-logo.svg',
    title: 'Vue 3'
  },
  {
    image: '/img/technology/typescript-logo.svg',
    title: 'Javascript'
  },
  {
    image: '/img/technology/tailwind-logo.svg',
    title: 'Vuetify'
  },
  {
    image: '/img/technology/pinia-logo.svg',
    title: 'Pinia'
  }
]
</script>
<template>
  <div
    class="relative flex min-h-screen w-full flex-col justify-center overflow-hidden py-8 lg:py-12"
  >
    <div class="mx-auto flex w-full max-w-prose justify-evenly lg:text-lg">
      <img
        v-for="item in technology"
        :key="item.title"
        :src="item.image"
        class="h-20"
        width="100"
        :alt="item.title"
      />
    </div>
    <div class="prose prose-slate lg:prose-lg mx-auto mt-8 w-full px-2">
      <p class="lead">
        For this project I used <strong>Vue 3</strong> as the basis of the project and I used the
        ecosystem recommended by Vue for state management (<strong>Pinia</strong>) and routing
        (<strong>Vue Router</strong>).
      </p>
      <p>
        Regarding the design, I have used <strong>Tailwind CSS</strong> (utility-first CSS
        framework).
        <br />
        I extended the theme to include custom colors for the brand palette.
      </p>
      <p class="border-2 border-gray-500 my-2 p-2 bg-pink-100">
        For this project, I have created a basic web application that displays every global flag and
        incorporates a basic search bar for filtering by country name.
      </p>
      <h2 class="mt-6 text-2xl font-semibold">Project Scaffolding</h2>
      <h3 class="mt-2 text-xl font-semibold text-blue-800">Vite</h3>
      <p>Vite is a lightweight and fast build tool with first-class Vue SFC support.</p>

      <h3 class="mt-2 text-xl font-semibold text-blue-800">Project structure</h3>
      <p>
        The structure of this project is following a "Modules" approach. This structure encapsulates
        each feature or domain, enhancing maintainability and preparing for potential evolution
        towards microservices.
      </p>
      <p>
        In the <code>/src/core</code> we will have the core components like the header (<code
          >TheHeader.vue</code
        >
        or <code>BaseRating.vue</code> per example), services or global stores for configuration.
      </p>
      <p>
        Also for testing, all the spec files are under <code>__test__</code> folder inside each
        category.
      </p>
      <div class="d-flex mx-auto mt-6 justify-center">
        <img src="/img/project-structure.png" width="300" alt="Project Structure" />
      </div>
      <h2 class="mt-2 text-xl font-semibold text-blue-800">Fetching data</h2>
      <p>
        For fetching data from the API, I have used the API fetch organaizing the calls using
        `/services`, in this way we have more flexibility and easy to mantain/extend.
      </p>
      <h2 class="mt-2 text-xl font-semibold text-blue-800">Activity module</h2>
      <p>
        I have created the Activity module using the Pinia store to be able to do the filtering on
        the user side once all the API data has been loaded.
      </p>
      <p>I have added a fixed image when displaying the Activity card to work as a placeholder.</p>
    </div>
  </div>
</template>
