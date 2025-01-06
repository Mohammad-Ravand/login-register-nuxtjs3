<script setup>
definePageMeta({
  middleware: ['auth'],
})
const {$store } = useNuxtApp()

onMounted(()=>{
  console.log($store.state.auth.user);

})
</script>
<template>
  <h1>Dashboard page</h1>
</template>