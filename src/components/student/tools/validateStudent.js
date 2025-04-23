const nameValidate=(name)=>{
    return /^[A-Za-zÀ-Ỹà-ỹ\s]{2,50}$/.test(name)
}
const ageValidate = (age) => {
    const parsedAge = Number(age);
    if (isNaN(parsedAge)) {        
        return false;
    }
    return parsedAge > 5 && parsedAge < 30;
}

const ClassValidate=(Lop)=>{
    return /^[A-Za-z0-9]{2,7}$/.test(Lop);
}
export {nameValidate,ageValidate,ClassValidate};