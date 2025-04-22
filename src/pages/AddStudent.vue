<template>
    <h1>đây là nơi thêm học sinh</h1>
    <input v-model="NewStudent.name" placeholder="Họ Tên"><br>
    <input v-model="NewStudent.age" placeholder="Tuổi"><br>
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
const NewStudent=reactive({
    vitri:null,name:'',age:null
})
const router=useRouter();
const Luu=()=>{
    if(NewStudent.vitri!==null&&NewStudent.name!==''&&NewStudent.age!==null){
        themhocsinh(NewStudent.vitri,NewStudent.name,NewStudent.age);
        NewStudent.vitri=null;
        NewStudent.name='';
        NewStudent.age=null;
        router.push('/admin/studentlist');
    }else{
        alert('Hãy điền đủ thông tin');
    }
}
</script>