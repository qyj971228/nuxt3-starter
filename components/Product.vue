<script setup lang="ts">
const { id } = defineProps<{ id: any }>()
const { data, error, refresh }: any = await useApi().shoppingGoods(id)

async function reload() {
  await refresh()
}
</script>

<template>
  <NuxtLayout v-if="error" name="error">
    <div>product 页面似乎出现了错误{{ error }}</div>
  </NuxtLayout>
  <NuxtLayout v-else-if="data" name="product">
    <div>{{ id }}</div>
    <div>{{ data?.data?.goodsTitle }}</div>
    <button @click="reload()">reload</button>
  </NuxtLayout>
</template>

<style></style>
