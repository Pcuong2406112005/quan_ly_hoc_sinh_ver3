<template>
    <h1>đây là nơi thêm lớp</h1>
    <input v-model="lopmoi" placeholder="Lớp"><br>
    <button @click="luu">Lưu</button>
</template>
<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
const router=useRouter();
const lopmoi=ref('');
//eslint-disable-next-line no-undef
const props=defineProps(['themlop'])
const luu=()=>{
    if(lopmoi.value!==''){
        props.themlop(lopmoi.value);
        lopmoi.value='';
        router.push('/admin/classlist');
    }else{
        alert('Hãy điền đủ thông tin')
    }
}
</script>