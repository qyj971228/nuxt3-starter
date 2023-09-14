<template>
  <NuxtLayout>
    <div>there's an error: {{ error.message }}</div>
    <button @click="handleError">handle it</button>
  </NuxtLayout>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>
