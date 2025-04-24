<template>
    <h2>Tìm Kiếm</h2>
    <select v-model="keywordlop">
        <option :value="''">Tất cả các lớp</option>
        <option v-for="(caclop,index) in infor" :key="index" :value="caclop.lop">{{ caclop.lop }}</option>
    </select>
    <input type="search" v-model="keywordname" placeholder="Tên"><input type="search" v-model="keywordage" placeholder="Tuổi">
    <button @click="timkiem">Tìm Kiếm</button>
</template>
<script setup>
import {ref} from 'vue';
import {infor} from '../../useInfor.js';
//eslint-disable-next-line no-undef
const emit=defineEmits(['timkiem']);
const timkiem=()=>{
    emit('timkiem',{lop:keywordlop,name:keywordname,age:keywordage});
}
const keywordlop=ref('');
const keywordname=ref('');
const keywordage=ref(null);
</script>