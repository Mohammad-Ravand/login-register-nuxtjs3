<script setup>
definePageMeta({
  middleware: ['auth'],
})
const {$store } = useNuxtApp()

onMounted(()=>{
  console.log($store.state.auth.user);
})

const user = $store.state.auth.user;
console.log({...user});
</script>
<template>
  <div>

  <h1>Dashboard page</h1>

    <BListGroup>
      <BListGroupItem class="border-light fw-bold">user info : </BListGroupItem>
      <BListGroupItem class="border border-1">email: {{user.email}}</BListGroupItem>
    </BListGroup>
  </div>
</template>