<template>
    <h1>đây là adminLayout</h1>
    <button @click="hocsinh">Học Sinh</button><button @click="lop">Lớp</button>
    <router-view v-slot="{Component}">
        <component :is="Component" :themlop="themlop" :themhocsinh="themhocsinh" :suahocsinh="suahocsinh" :sualop="sualop" :infor="infor" :xoahocsinh="xoahocsinh" :xoalop="xoalop"></component>
    </router-view>
</template>
<script setup>
import {reactive} from 'vue';
import {useRouter} from 'vue-router';
const infor=reactive(
    [
    {
        lop:'CN01',
        students:[
            {name:'Phan Mạnh Cường',age:20},
            {name:'Nguyễn Văn A',age:20}
        ]
    },
    {
        lop:'CN02',
        students:[
            {name:'Trần Văn B',age:20},
            {name:'Phạm Thị C',age:20}
        ]
    }
])

const xoalop=(value)=>{
    infor.splice(value,1);
}
const sualop=(value,lop)=>{
    infor[value].lop=lop;
}
const xoahocsinh=(value,value1)=>{
    infor[value].students.splice(value1,1);
}
const suahocsinh=(value,value1,name,age,lop)=>{
    infor[value].lop=lop;
    infor[value].students[value1].name=name;
    infor[value].students[value1].age=age;
}
const themhocsinh=(index,name,age)=>{
    infor[index].students.push({name:name,age:age});
}
const themlop=(value)=>{
    infor.push({ lop: value,students: []});

}
const router=useRouter();
const hocsinh=()=>{
    router.push('/admin/studentlist');
}
const lop=()=>{
    router.push('/admin/classlist');
}
</script>