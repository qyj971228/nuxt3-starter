<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/product/1">product</NuxtLink>
      <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
