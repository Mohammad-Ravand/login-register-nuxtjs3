<script setup>

import Navigation from "~/components/header/Navigation.vue";
</script>

<template>
  <Navigation/>

  <BContainer class="bv-example-row">
    <slot />
  </BContainer>
</template>