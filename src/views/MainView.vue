<template>
    <div class="container">
        <SideBar></SideBar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import SideBar from '../components/SideBar.vue'
</script>

<style scoped>
.container{
    display: flex;
    width: 100%;
    background: linear-gradient( 317deg, #5f2f9a, #076a81, #b269cd) no-repeat center;
    min-height: 100%;
}

  
.content{
    flex: 1;
    padding: 20px;
    width: 6000px;
}
</style>
