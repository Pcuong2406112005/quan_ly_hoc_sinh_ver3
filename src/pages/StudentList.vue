<template>
    <h2>Đây là nơi để danh sách học sinh</h2>
    <button @click="Themhocsinh">Thêm Học Sinh</button>
    <StudentSearch @timkiem="timkiem" ></StudentSearch>
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