
function alertFunction (){
    console.log("alert 호출");
    alert("안녕하세요")
}

const eleconfirm=document.getElementById("id2");

eleconfirm.addEventListener("click",function(){
    console.log("confirm 호출")
    const result=confirm("컨펌함수 입니다.")
    if(result)
        console.log("확인")
    else
        console.log("취소")

})

const eleprompt = document.getElementById("id3");

eleprompt.addEventListener("click",promptFunction);

function promptFunction(){
    console.log("prompt 호출")
}

