<template>
  <nav>
    <Navbar></Navbar>
  </nav>
<div class="bodyy">
  <FormNotificacion></FormNotificacion>
</div>
<footer>
  <Footer></Footer>
</footer>
</template>

<script setup>
import FormNotificacion from "./components/NotificationForm.vue";
import Navbar from "./components/NavBArComponent.vue";
import Footer from "./components/FooterComponent.vue";
</script>

<style scoped>
</style>
