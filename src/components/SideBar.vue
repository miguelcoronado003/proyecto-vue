<template>
    <div class="SideBar">
        <h2> Barra  lateral</h2>
        <router-link to="/listaDeTareas" class="router-link">Lista de tareas</router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
.router-link{
    color: black;
}
.SideBar{
    width: 200px;
    background: linear-gradient( 317deg, #5f2f9a, #076a81, #b269cd) no-repeat center;
    min-height: 100%;
    padding: 20px;
}
</style>