<template>
    <h2>Đây là nơi để danh sách học sinh</h2>
    <button @click="Themhocsinh">Thêm Học Sinh</button>
    <StudentSearch @timkiem="timkiem" :infor="infor"></StudentSearch>
    <StudentTable :search="trangthaitimkiem" :flatInfor="flatInfor" :suahocsinh="props.suahocsinh" :xoahocsinh="props.xoahocsinh"></StudentTable>
</template>    
<script setup>
import StudentTable from '../components/student/StudentTable.vue';
import StudentSearch from '../components/student/StudentSearch.vue';
import {computed,reactive} from 'vue'
import {useRouter} from 'vue-router'
//eslint-disable-next-line no-undef
const props=defineProps(['infor','xoahocsinh','suahocsinh'])
const flatInfor=computed(()=>props.infor.flatMap((caclop,index)=>
    caclop.students.map((student,index1)=>({
        lop:caclop.lop,
        name:student.name,
        age:student.age,
        index,index1
    }))
).map((student,idx)=>({
    ...student,
    id:idx+1
})))
const router=useRouter();
const Themhocsinh=()=>{
    router.push('/admin/addstudent');
}
const trangthaitimkiem=reactive({
    search:true,
    dacdiemtimkiem:''
})
const timkiem=(value)=>{
    if(value===''){
        trangthaitimkiem.search=true;
        trangthaitimkiem.dacdiemtimkiem='';
    }
    else{
        trangthaitimkiem.search=false;
        trangthaitimkiem.dacdiemtimkiem=value;
    }
}
</script>