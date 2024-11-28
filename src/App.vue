<template>
  <Navbar></Navbar>
  <FormNotificacion></FormNotificacion>
  <Footer></Footer>
</template>

<script setup>
import FormNotificacion from "./components/NotificationForm.vue";
import Navbar from "./components/NavBArComponent.vue";
import Footer from "./components/FooterComponent.vue";
</script>

<style scoped>
body{
    width: 100%;
    background: linear-gradient( 317deg, #5f2f9a, #076a81, #b269cd) no-repeat center;
    min-height: 100vh;
}
</style>
