<template>
    <table border="1">
        <thead>
            <tr>
                <td>#</td> <td>Họ Tên</td> <td>Tuổi</td> <td>Lớp</td> <td>Thao Tác</td>
            </tr>
        </thead>
        <tbody>
            <template v-for="(student,index) in paginatedData" :key="index">
                <tr v-if="props.search.search===true||(student.lop===props.search.dacdiemtimkiem)">
                    <td>{{ student.id }}</td>
                    <td>{{ student.name }}</td>
                    <td>{{ student.age }}</td>
                    <td>{{ student.lop }}</td>
                    <td>
                        <StudentAction :student="student"></StudentAction>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
    <div>
        <button @click="PrevPage">Trang Trước</button>{{ (currentPage+1)+'/'+totalPage }}<button @click="NextPage">Trang Sau</button>
    </div>
</template>
<script setup>
import StudentAction from './tools/StudentAction.vue';
//eslint-disable-next-line no-undef
const props=defineProps(['flatInfor','search'])
import {computed,ref} from 'vue';
const PageSize=5;
const currentPage=ref(0);
const paginatedData=computed(()=>{
    const start=currentPage.value*PageSize;
    return props.flatInfor.slice(start,start + PageSize);
});
const totalPage=computed(()=>
    Math.ceil(props.flatInfor.length/PageSize)
)    
const NextPage=()=>{
    currentPage.value=(currentPage.value+1)%totalPage.value;
}
const PrevPage=()=>{
    if(currentPage.value>0){
        currentPage.value--;
    }else{
        currentPage.value=totalPage.value-1;
    }
}
</script>