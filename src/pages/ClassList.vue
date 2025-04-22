<template>
    <h2>đây là nơi để danh sách lớp</h2>
    <button @click="themlop">Thêm Lớp</button>
    <ClassTable :flatInfor="flatInfor"></ClassTable>
</template>
<script setup>
import ClassTable from '../components/class/ClassTable.vue';
import {computed} from 'vue';
import {useRouter} from 'vue-router'
import {infor} from '../useInfor';
const flatInfor=computed(()=>infor.map((caclop,index)=>(
    {
        lop:caclop.lop,
        index
    }
)))
const router=useRouter();
const themlop=()=>{
    router.push('/admin/addclass');
}
</script>