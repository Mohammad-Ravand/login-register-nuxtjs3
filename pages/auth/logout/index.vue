<script setup>
const {$store} = useNuxtApp();

onMounted(()=>{
  $store.commit("auth/logout");
  navigateTo('/auth/login')
})
</script>


<template></template>