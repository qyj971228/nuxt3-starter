<script setup lang="ts">
const route = useRoute()
const id = route.params.id
const { data }: { data: any } = await useFetch('https://app.uchongdingwei.com/biz/app/shoppingGoods/' + id)
</script>

<template>
  <NuxtLayout name="product">
    <div>{{ id }}</div>
    <div>{{ data.data.goodsTitle }}</div>
  </NuxtLayout>
</template>

<style></style>
