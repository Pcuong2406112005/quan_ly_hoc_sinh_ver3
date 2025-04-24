import { computed } from 'vue';
import { infor } from "../../../useInfor.js";

const flatInfor=computed(()=>infor.flatMap((caclop,index)=>
    caclop.students.map((student,index1)=>({
        lop:caclop.lop,
        name:student.name,
        age:student.age,
        index,index1
    }))
).map((student,idx)=>({
    ...student,
    id:idx+1
})))
export {flatInfor};

