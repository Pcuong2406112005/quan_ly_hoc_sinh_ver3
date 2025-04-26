<template>
    <div>
    <button v-if="trangthai==='sua'" @click="sua">Sửa</button>
    <input v-if="trangthai==='luu'" v-model="NewClass" placeholder="Lớp">
    <button v-if="trangthai==='luu'" @click="luu">Lưu</button>
    </div>
    <div>
    <button @click="props.xoalop(props.lop.index)">Xóa</button>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import { ClassValidate } from '@/components/student/tools/validateStudent.js';
//eslint-disable-next-line no-undef
const props=defineProps(['lop','xoalop','sualop'])
const trangthai=ref('sua');
const NewClass=ref('');
const sua=()=>{
    trangthai.value='luu';
}
const luu=()=>{
    if(NewClass.value!==''){
        if(ClassValidate(NewClass.value)){
        props.sualop(props.lop.index,NewClass.value);
        NewClass.value='';
        trangthai.value='sua';}
        else{
            alert('Hãy điền đúng lớp');
        }
    }else{
        alert('Hãy điền đủ thông tin');
    }
}
</script>
<style scoped>
button{
    color:blue;
    border:none;
    text-decoration: underline;
    background: none;
}
</style>