<template>
    <div>
    <button v-if="trangthai==='sua'" @click="Sua">Sửa</button>
    <input v-if="trangthai==='luu'" v-model="NewStudent.name" placeholder="Họ Tên">
    <input v-if="trangthai==='luu'" v-model="NewStudent.age" placeholder="Tuổi">
    <input v-if="trangthai==='luu'" v-model="NewStudent.lop" placeholder="Lớp">
    <button v-if="trangthai==='luu'" @click="luu">Lưu</button>
    </div>
    <div>
    <button @click="props.xoahocsinh(props.student.index,props.student.index1)">Xóa</button>
    </div>
</template>
<script setup>
import {ref,reactive} from 'vue';
//eslint-disable-next-line no-undef
const props=defineProps(['student','xoahocsinh','suahocsinh']);
const trangthai=ref('sua');
const NewStudent=reactive({
    name:'',age:null,lop:''
})
const Sua=()=>{
    trangthai.value='luu';
}
const luu=()=>{
    if(NewStudent.name!==''&&NewStudent.age!==null&&NewStudent.lop!==''){
        props.suahocsinh(props.student.index,props.student.index1,NewStudent.name,NewStudent.age,NewStudent.lop);
        NewStudent.name='';
        NewStudent.age=null;
        NewStudent.lop='';
        trangthai.value='sua';
    }else{
        alert('Hãy điền đủ thông tin');
    }
}
</script>