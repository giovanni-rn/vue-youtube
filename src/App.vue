<template>
  <header class="m-8 mt-4 rounded-xl flex justify-center bg-white shadow-sm">
    <form class="w-full mx-12 flex flex-row justify-between items-center">
      <RouterLink to="/" class="w-10">
        <img src="/youtube.png" alt="YouTube logo" />
      </RouterLink>
      <input
        type="text"
        placeholder="Search..."
        class="my-3 ml-8 px-4 py-3 rounded-xl bg-gray-100 text-sm"
      />
      <font-awesome-icon icon="magnifying-glass" class="text-2xl ml-6" />
    </form>
  </header>
  <main>
    <RouterView />
  </main>
</template>
