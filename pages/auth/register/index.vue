<script setup lang="ts">
import GoogleAuthProvider from "~/components/auth/GoogleAuthProvider.vue";
import Divider from "~/components/ui/Divider.vue";
import RegisterVideo from '~/assets/videos/register.mp4'


definePageMeta({
  middleware: ['guest'],
  layout: 'guest-layout'
})
</script>


<template>
  <BRow>
    <BCol class="play-video-screen-column d-none d-lg-block   overflow-hidden">
      <video class="" autoplay loop muted :src="RegisterVideo"></video>
    </BCol>
    <BCol class="h-screen">
      <div class="h-100">
        <BRow class="h-100 align-items-center justify-content-start">
          <BCol cols="2" class="d-none d-lg-block"></BCol>

          <BCol>
            <BCard
                class="border-0 me-auto m-auto m-lg-0 shadow-none"
                tag="article"
                style="max-width: 26rem"
            >
              <BCardTitle class="mb-40px fw-bold title-color" tag="h2">
                Sign up to Dribbble
              </BCardTitle>

              <div class="w-100  mb-4">
                <GoogleAuthProvider variant="dark"/>
              </div>
              <Divider text="or"/>

              <NuxtLink to="/auth/register/form">
                <BButton class="w-100 mt-2 rounded-5 py-3 border border-1 " href="#" variant="white">
                  Continue with email
                </BButton>
              </NuxtLink>


              <p class="text-14px mt-3 w-100 text-center">
                Already have an account?
                <NuxtLink to="/auth/login" class="me-2 title-color" href="">Sign In</NuxtLink>
              </p>

            </BCard>
          </BCol>
        </BRow>
      </div>
    </BCol>
  </BRow>
</template>

