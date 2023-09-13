<template>
  <NuxtLayout>
    <div>there's an error: {{ error.message }}</div>
    <button @click="handleError">handle it</button>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
