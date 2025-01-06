<script setup lang="ts">
import IconGoolge from '~/assets/icons/icon-google.svg'
import {
  useCodeClient,
} from "vue3-google-signin";
defineProps({
  variant: {
    type: String,
    default: 'white', // Default value for the prop
  },
});
const handleOnSuccess = async (response) => {
  // send code to a backend server to verify it.
  console.log("Code: ", response.code);

  // use axios or something to reach backend server
  const result = await fetch("https://YOUR_BACKEND/code/verify", {
    method: "POST",
    body: JSON.stringify({
      code: response.code,
    }),
  });
};

const handleOnError = (errorResponse) => {
  console.log("Error: ", errorResponse);
};

const {isReady, login} = useCodeClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
  // other options
});
</script>

<template>
    <BButton class="w-100 d-flex gap-3 py-3 rounded-5 border-1 border align-items-center justify-content-center" :variant="variant" :disabled="!isReady" @click="() => login()">
      <Icon  name="logos:google-icon" />
      <span class="block">Login with Google</span>
    </BButton>
</template>