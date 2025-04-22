<template>
    <h1>đây là adminLayout</h1>
    <button @click="hocsinh">Học Sinh</button><button @click="lop">Lớp</button>
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