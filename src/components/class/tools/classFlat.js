import { infor } from "@/useInfor";
import {computed} from 'vue';
const flatInfor=computed(()=>infor.map((caclop,index)=>(
    {
        lop:caclop.lop,
        index
    }
)))
export {flatInfor};