<script setup lang="ts">
const baseUrl = useBaseUrl()
</script>
<template>
  <Html lang="en">
    <Head>
      <Title>this is title</Title>
      <Meta
        name="description"
        content="`My page's ${number} description`"
      />
    </Head>
  </Html>
  <div class="home m-10">hello{{ uppercase(baseUrl) }}</div>
</template>
<style scoped>
@import url('../assets/home.css');
</style>
