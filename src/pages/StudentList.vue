<template>
    <StudentSearch @timkiem="timkiem" ></StudentSearch>
    <button @click="Themhocsinh">Thêm Học Sinh</button>
    <StudentTable :search="search" ></StudentTable>
</template>    
<script setup>
import StudentTable from '../components/student/StudentTable.vue';
import StudentSearch from '../components/student/StudentSearch.vue';
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
const router=useRouter();
const Themhocsinh=()=>{
    router.push('/admin/addstudent');
}
const search=reactive({
    name:'',lop:'',age:null
})
const timkiem=(value)=>{
    search.name=value.name;
    search.age=value.age;
    search.lop=value.lop;
}
</script>
<style scoped>
button{
    background-color: rgb(170, 217, 244);
    color:blue;
    border:none;
    display:block;
    margin-top:10px;
    margin-left:160px;
}
</style>