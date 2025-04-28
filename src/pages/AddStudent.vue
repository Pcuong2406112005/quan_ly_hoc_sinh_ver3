<template>
    <h1>đây là nơi thêm học sinh</h1>
    <input v-model="NewStudent.name" placeholder="Họ Tên"><br>
    <input type="date" v-model="NewStudent.birthday" placeholder="Ngày sinh"><br>
    <select v-model="NewStudent.vitri">
        <option disabled>--Chọn Lớp--</option>
        <option v-for="(lop,index) in infor" :key="index" :value="index">{{ lop.lop }}</option>    
    </select><br>
    <button @click="Luu">Lưu</button>
</template>
<script setup>
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import {infor,themhocsinh} from '../useInfor.js';
import { nameValidate } from '@/components/student/tools/validateStudent.js';
const NewStudent=reactive({
    vitri:null,name:'',birthday:null
})
const router=useRouter();
const Luu=()=>{
    if(NewStudent.vitri!==null&&NewStudent.name!==''&&NewStudent.birthday!==null){
        if(nameValidate(NewStudent.name)){
        let age=2025-(new Date(NewStudent.birthday)).getFullYear();          
        themhocsinh(NewStudent.vitri,NewStudent.name,age);
        NewStudent.vitri=null;
        NewStudent.name='';
        NewStudent.birthday=null;
        router.push('/admin/studentlist');
        }else{
            alert('Bạn đã điền sai tên hoặc tuổi,hãy điền lại');
        }
    }else{
        alert('Hãy điền đủ thông tin');
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
<style scoped>
input,select{
    width: 10%;
}
button{
    margin-left:6%;
}
</style>