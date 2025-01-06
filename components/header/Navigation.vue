<script  setup>
import IconHome from 'assets/icons/icon-home.svg';

const {$store} = useNuxtApp();
const isLoggedIn =  $store.getters['auth/isLoggedIn'];


</script>

<template>
  <!-- #region template -->
  <BNavbar v-b-color-mode="'light'" class="main-navigation" :toggleable="false" >
    <BNavbarBrand href="#" class="logo-container">
      <NuxtLink class="mx-2 text-decoration-none"  to="/">
        <IconHome class="text-dark" />
      </NuxtLink>
    </BNavbarBrand>
    <BNavbarNav>

    </BNavbarNav>
    <BNavbarToggle target="nav-offcanvas" />
    <BOffcanvas id="nav-offcanvas" title="Offcanvas" placement="end" is-nav>
      <BNavbarNav>
        <BNavItem href="#">Link</BNavItem>
        <BNavItem href="#" disabled>Disabled</BNavItem>
      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItemDropdown text="Lang" right>
          <BDropdownItem href="#">EN</BDropdownItem>
          <BDropdownItem href="#">ES</BDropdownItem>
          <BDropdownItem href="#">RU</BDropdownItem>
          <BDropdownItem href="#">FA</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <BDropdownItem href="#">Profile</BDropdownItem>
          <BDropdownItem href="#">Sign Out</BDropdownItem>
        </BNavItemDropdown>
      </BNavbarNav>
      <BNavForm class="d-flex">
        <BFormInput class="me-2" placeholder="Search" />
        <BButton type="submit" variant="outline-success">Search</BButton>
      </BNavForm>
    </BOffcanvas>
    <BCollapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto align-items-center mb-lg-0">

        <NuxtLink v-if="isLoggedIn" class="mx-2 d-none d-sm-block text-decoration-none"  to="/auth/register">
          <BNavText >Sign up</BNavText>
        </NuxtLink>
        <NuxtLink v-else class="mx-2 d-none d-sm-block text-decoration-none"  to="/auth/logout">
          <BNavText >Log out</BNavText>
        </NuxtLink>
        <NuxtLink v-if="isLoggedIn" class="mx-2 text-decoration-none" to="/auth/login">
          <BNavText >
            <BBadge class="py-3 px-4 rounded-5" variant="dark">login</BBadge>
          </BNavText>
        </NuxtLink>

        <BNavItemDropdown right v-show="false">
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>mohammad</em>
          </template>
          <BDropdownItem href="#">Dashboard</BDropdownItem>
          <BDropdownItem href="#">Sign Out</BDropdownItem>
        </BNavItemDropdown>

      </BNavbarNav>

    </BCollapse>
  </BNavbar>
  <!-- #endregion template -->
</template>
<script setup lang="ts">
</script>