<template>
    <h1>đây là nơi thêm lớp</h1>
    <input v-model="lopmoi" placeholder="Lớp"><br>
    <button @click="luu">Lưu</button>
</template>
<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import { ClassValidate } from '@/components/student/tools/validateStudent.js';
const router=useRouter();
const lopmoi=ref('');
import {themlop} from '../useInfor';
const luu=()=>{
    if(lopmoi.value!==''){
        if(ClassValidate(lopmoi.value)){
        themlop(lopmoi.value);
        lopmoi.value='';
        router.push('/admin/classlist');}
        else{
            alert('Hãy nhập đúng tên lớp')
        }
    }else{
        alert('Hãy điền đủ thông tin')
    }
}
</script>
<style scoped>
button{
    background-color: rgb(170, 217, 244);
    color:blue;
    border-radius: 6px;
}
</style>