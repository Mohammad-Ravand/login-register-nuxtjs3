<script setup lang="ts">
import GoogleAuthProvider from "~/components/auth/GoogleAuthProvider.vue";
import Divider from "~/components/ui/Divider.vue";
import LoginVideo from '~/assets/videos/login.mp4'
import * as yup from 'yup';
import {useForm} from 'vee-validate';

import useFirebaseAuth from "~/composeables/useFirebaseAuth";
import {toast} from 'vue3-toastify';

const {loginUser} = useFirebaseAuth() // auto-imported

definePageMeta({
  middleware: ['guest'],

  layout: 'guest-layout'
})

const schema = yup.object({
  email: yup
      .string()
      .email('Please enter a valid email address.')
      .required('Email is required.'),
  password: yup
      .string()
      .min(6, 'Password must be at least 6 characters long.')
      .required('Password is required.'),

});
const {values, errors, handleSubmit, isSubmitting, defineField} = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField('email', {
  props: state => ({error: state.errors[0]})
});
const [password, passwordAttrs] = defineField('password', {
  props: state => ({error: state.errors[0]})
});


const submit = handleSubmit(async (values) => {
  const res = await loginUser(values.email, values.password)
  let notifyMessage = res ? 'loggedin successfully' : 'error login user';

  if (res == true) {
    toast.success(notifyMessage, {
      autoClose: 3000,
    });
    setTimeout(()=>{
      navigateTo('/dashboard')
    },1000)
  } else {
    toast.error(notifyMessage, {
      autoClose: 3000,
    });
  }

});

function getStateInput(name) {
  let nameValue = {...values}[name];
  let errorValue = errors.value[name];
  if (!nameValue) {
    return null;
  }

  return (errorValue && errorValue.length > 0) ? false : true;

}

</script>

<template>
  <BRow>
    <BCol class="play-video-screen-column d-none d-lg-block   overflow-hidden">
      <video class="" autoplay loop muted :src="LoginVideo"></video>
    </BCol>
    <BCol class="h-screen">
      <div class="h-100">

        <BRow class="h-100 align-items-center justify-content-start">
          <BCol cols="2" class="d-none d-lg-block"></BCol>
          <BCol class="">
            <BCard
                class="border-0 me-auto m-auto m-lg-0 shadow-none"
                tag="article"
                style="max-width: 26rem"
            >
              <BCardTitle class="mb-40px fw-bold title-color" tag="h2">
                Sign in to Dribbble
              </BCardTitle>

              <div class="w-100  mb-4">
                <GoogleAuthProvider/>
              </div>
              <Divider text="or sign in with email"/>

              <form @submit.prevent="submit">
                <label class="title-color text-15px mb-1 fw-semibold">Username or Email</label>
                <BFormInput id="email" class="py-3 rounded-4 shadow-sm" :state="getStateInput('email')" v-model="email"
                            v-bind="emailAttrs"/>
                <BFormInvalidFeedback id="email-feedback"> {{ errors?.email }}</BFormInvalidFeedback>

                <br/>

                <label class="title-color  text-15px d-flex justify-content-between mb-1 fw-semibold">
                  <span>Password</span>
                  <a class="fw-normal text-black ">Forgot?</a>
                </label>
                <BFormInput id="password" class="py-3 rounded-4 shadow-sm" :state="getStateInput('password')"
                            v-model="password" v-bind="passwordAttrs"/>
                <BFormInvalidFeedback id="password-feedback"> {{ errors.password }}</BFormInvalidFeedback>


                <br>
                <BButton type="submit" :disabled="isSubmitting" :class="{'disabled-pointer':isSubmitting}"
                         class="w-100 mt-2 rounded-5 py-3 bg-dark">Sign in
                </BButton>

              </form>
              <p class="text-14px mt-3 w-100 text-center">
                Don't have an account?
                <NuxtLink class="me-2 title-color" to="/auth/register">Sign up</NuxtLink>
              </p>
            </BCard>
          </BCol>
        </BRow>
      </div>
    </BCol>
  </BRow>
</template>

<style scoped>


</style>
