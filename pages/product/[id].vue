<script setup lang="ts">
const route = useRoute()
const id = route.params.id
</script>

<template>
  <Product :id="id" />
  <!-- <ClientOnly>
    <Product :id="id"></Product>
    <template #fallback>
      <NuxtLayout name="loading"></NuxtLayout>
    </template>
  </ClientOnly> -->
</template>

<style></style>
