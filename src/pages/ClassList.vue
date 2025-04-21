<template>
    <h2>đây là nơi để danh sách lớp</h2>
    <button @click="themlop">Thêm Lớp</button>
    <ClassTable :flatInfor="flatInfor" :sualop="props.sualop" :xoalop="props.xoalop"></ClassTable>
</template>
<script setup>
import ClassTable from '../components/class/ClassTable.vue';
import {computed} from 'vue';
import {useRouter} from 'vue-router'
//eslint-disable-next-line no-undef
const props=defineProps(['infor','xoalop','sualop'])
const flatInfor=computed(()=>props.infor.map((caclop,index)=>(
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