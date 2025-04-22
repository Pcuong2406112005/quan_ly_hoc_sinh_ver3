import {reactive,watch} from 'vue'
function tryParseInfor() {
    try {
      const data = JSON.parse(localStorage.getItem('infor'))
      if (Array.isArray(data) && data.every(item => Array.isArray(item.students))) {
        return data
      }
    } catch (e) {
      console.warn('Lỗi khi parse localStorage:', e)
    }
    return [
      {
        lop: 'CN01',
        students: [
          { name: 'Phan Mạnh Cường', age: 20 },
          { name: 'Nguyễn Văn A', age: 20 }
        ]
      },
      {
        lop: 'CN02',
        students: [
          { name: 'Trần Văn B', age: 20 },
          { name: 'Phạm Thị C', age: 20 }
        ]
      }
    ]
  }
const infor = reactive(tryParseInfor())  
watch(infor, (newVal) => {
    localStorage.setItem('infor', JSON.stringify(newVal))
  }, { deep: true })
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
export {infor,xoalop,sualop,xoahocsinh,suahocsinh,themhocsinh,themlop}