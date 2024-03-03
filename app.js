let boxes=document.querySelectorAll(".box");
let reb=document.querySelector("#reset");
let newGame=document.querySelector("#new-btn");
let msgCon=document.querySelector(".msg-con");
let msg=document.querySelector("#msg");
let turn1=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turn1=true;
    enableBoxs();
    msgCon.classList.add("hide");

}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn1){
            box.innerText="O";
            turn1=false;
        }
        else{
        box.innerText="X";
            turn1=true;
        }
        box.disabled=true;
        checkWinner();
    })
});
const disableBoxs=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxs=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`congratulations,winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBoxs();
}
const checkWinner=()=>{
    for(let pattern of win)
    {
        let a=boxes[pattern[0]].innerText;
        let b=boxes[pattern[1]].innerText;
        let c=boxes[pattern[2]].innerText;
        if(a!=""&&b!=""&&c!=""){
            if(a===b&&a===c){
                console.log("winner",a);
                showWinner(a);
            }
        }
    }
    
}
newGame.addEventListener("click",resetGame);
reb.addEventListener("click",resetGame);