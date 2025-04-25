<template>
    <table border="1">
        <thead>
            <tr>
                <td>#</td> <td>Lớp</td> <td>Thao Tác</td>
            </tr>
        </thead>
        <tbody>
            <template v-for="(lop,index) in paginateData" :key="index">
                <tr>
                    <td>{{ lop.index+1 }}</td> <td>{{ lop.lop }}</td>
                    <td>
                        <ClassAction :lop="lop" :sualop="sualop" :xoalop="xoalop"></ClassAction>
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
import {ref,computed} from 'vue';
import ClassAction from './tools/ClassAction.vue'
//eslint-disable-next-line no-undef
const props=defineProps(['flatInfor'])
import {sualop,xoalop} from '../../useInfor.js';
const PageSize=5;
const currentPage=ref(0);
const paginateData=computed(()=>{
    const start = currentPage.value*PageSize;
    return props.flatInfor.slice(start,start+PageSize);
})
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
<style scoped>
table{
    border-collapse: collapse;
}
</style>