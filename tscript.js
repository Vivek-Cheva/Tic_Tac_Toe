let boxes = document.querySelectorAll('.box')
let resetbtn =  document.querySelector('.reset-btn')

const winpaterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let turn0=true;
let gstatus=false
boxes.forEach((val)=>{
    val.addEventListener('click',()=>{
        if(turn0 && val.innerText=='' &&gstatus==false ){
            val.innerText='o';
            turn0=false;
        }else{
            if(val.innerText==''&&gstatus==false){

                val.innerText='X';
                turn0=true;
            }
        }

for(let pattern of winpaterns){
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if(val1===val2&&val2===val3&& val3!=''){
        console.log('Winner',val1);
        let win = document.querySelector('.result');
        win.style.display='inline-block';
        win.innerText='Winner is '+val1;
        gstatus=true;
        boxes[pattern[0]].style.color='black';
        boxes[pattern[1]].style.color='black';
        boxes[pattern[2]].style.color='black';
       
        
    }
}

    })
})
resetbtn.addEventListener('click',()=>{
boxes.forEach((val)=>{
    val.innerText='';
})
let win = document.querySelector('.result');
        win.style.display='none';
        gstatus=false;
})