<template>
    <h1>quan ly hoc sinh ver 3</h1>
    <button @click="hocsinh" class="hocsinh">Học Sinh</button><button @click="lop" class="lop">Lớp</button>
    <router-view v-slot="{Component}">
        <component :is="Component" ></component>
    </router-view>
</template>
<script setup>
import {useRouter} from 'vue-router';
const router=useRouter();
const hocsinh=()=>{
    router.push('/admin/studentlist');
}
const lop=()=>{
    router.push('/admin/classlist');
}
</script>
<style scoped>
button{
    border:none;
}
.hocsinh{
    background-color: white;
    color:blue;
    width: 120px;
    height: 23px;
}
.lop{
    background-color: rgb(209, 208, 208);
    color:blue;
    width: 120px;
    height: 23px;
}
</style>