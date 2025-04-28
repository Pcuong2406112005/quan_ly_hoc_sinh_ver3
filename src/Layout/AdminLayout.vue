<template>
    <h1>quan ly hoc sinh ver 3</h1>
    <button @click="hocsinh" class="hocsinh">Học Sinh</button><button @click="lop" class="lop">Lớp</button>
    <br>
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
<style scoped lang="scss">
$btn-width: 120px;
$btn-height: 23px;
$btn-bg-color: white;
$btn-text-color: blue;
$btn-hover-bg-color: rgb(209, 208, 208);

button {
  border: none;
  margin-bottom: 30px;

  &.hocsinh {
    background-color: $btn-bg-color;
    color: $btn-text-color;
    width: $btn-width;
    height: $btn-height;
  }

  &.lop {
    background-color: $btn-hover-bg-color;
    color: $btn-text-color;
    width: $btn-width;
    height: $btn-height;
  }
}
</style>