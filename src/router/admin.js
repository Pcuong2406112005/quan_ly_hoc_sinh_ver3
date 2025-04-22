import { createRouter,createWebHistory } from "vue-router";

import AdminLayout from '@/Layout/AdminLayout.vue';
import StudentList from '@/pages/StudentList.vue';
import AddStudent from '@/pages/AddStudent.vue'
import ClassList from "@/pages/ClassList.vue";
import AddClass from '@/pages/AddClass.vue'

const routes=[
    {path:'/',redirect:'/admin'},
    {
        path:'/admin',
        redirect:'/admin/studentlist',
        component:AdminLayout,
        children:[
            {
                path:'studentlist',
                name:'StudentList',
                component:StudentList
            },
            {
                path:'addstudent',
                name:'AddStudent',
                component:AddStudent
            },
            {
                path:'classlist',
                name:'ClassList',
                component:ClassList
            },
            {
                path:'addclass',
                name:'AddClass',
                component:AddClass
            }
        ]
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router;