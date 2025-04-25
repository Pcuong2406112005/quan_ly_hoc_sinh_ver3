import {computed,ref} from 'vue';

export function useClassPagination(dataSource,PageSize=5){
const currentPage=ref(0);
const paginateData=computed(()=>{
    const start = currentPage.value*PageSize;
    return dataSource.slice(start,start+PageSize);
})
const totalPage=computed(()=>
    Math.ceil(dataSource.length/PageSize)
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
return {
    currentPage,
    paginateData,
    totalPage,
    NextPage,
    PrevPage
}
}