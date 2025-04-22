<template>
    <h2>Tìm Kiếm</h2>
    <select v-model="keyword">
        <option :value="''">Tất cả các lớp</option>
        <option v-for="(caclop,index) in infor" :key="index" :value="caclop.lop">{{ caclop.lop }}</option>
    </select>
    <button @click="timkiem">Tìm Kiếm</button>
</template>
<script setup>
import {ref} from 'vue';
import {infor} from '../../useInfor.js';
//eslint-disable-next-line no-undef
const emit=defineEmits(['timkiem']);
const timkiem=()=>{
    emit('timkiem',keyword.value);
}
const keyword=ref('');
</script>