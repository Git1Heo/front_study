function phoneCheck(){
    const exp= /^\d{3}-\d{4}-\d{4}$/;
    const phone = document.getElementById('phone').value;
    const result = document.getElementById('phone-check-result');

    if(phone.match(exp)){
        result.innerHTML ="유효한 형식입니다."
        result.style.color="green";
    }
    else{
        result.innerHTML="유효하지 않은 형식입니다"
        result.style.color="red"
    }

}