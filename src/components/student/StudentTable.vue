<template>
    <table border="1">
        <thead>
            <tr>
                <th>#</th> <th>Họ Tên</th> <th>Tuổi</th> <th>Lớp</th> <th>Thao Tác</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(student,index) in paginatedData" :key="index">
                <tr>
                    <td>{{ student.id }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.age }}</td>
                    <td>{{ student.lop }}</td>
                    <td><StudentAction :student="student"></StudentAction></td>
                </tr>
            </template>
        </tbody>
    </table>
    <div>
        <button @click="PrevPage" >Trang Trước</button>{{ (currentPage+1)+'/'+totalPage }}<button @click="NextPage">Trang Sau</button>
    </div>
</template>
<script setup>
import StudentAction from './tools/StudentAction.vue';
//eslint-disable-next-line no-undef
const props=defineProps(['search'])
import { flatInfor } from './tools/FlatStudent.js';
import { usePagination } from './tools/usePagination';
const {
    currentPage,
    paginatedData,
    totalPage,
    NextPage,
    PrevPage
}=usePagination(flatInfor,props.search);
</script> 
<style scoped>
button{
    width:90px;
    height:20px;
}
table{
    border-collapse: collapse;
}
td{
    text-align: center;
}
</style>