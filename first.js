let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let mssg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");

let turnO=true; //playerX,playerO always 1st player0 turn

let winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,5],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]; //2d array

let resetGame=()=>{ //newgame resetgame for both it is
    turnO=true; // if we press on reset again the first click starts from playerO so
    enableboxes(); //again to start so removing disablebutton
    msgcontainer.classList.add("hide"); // now to play game hiding the top container
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
      console.log("box was clicked");
      if (turnO===true){
        box.innerText="O"; //playerO in
        turnO=false; //next playerturnX
      }
      else{
        box.innerText="X"; //playerX
        turnO=true; //next playerturnO
      }
      box.disabled=true; // only once clicked 2nd tym click it will nt take
      checkwinner(); //calling function to check winner
    });
});
let showwinner=(winner)=>{
    mssg.innerText=`Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide"); // to show the winner, removing the hide struture from html
};
let disableboxes=()=>{
    for(let boxx of boxes){
       boxx.disabled=true; //to disable the box after winner is declared
    }
    
};
let enableboxes=()=>{
    for(let boxx of boxes){
       boxx.disabled=false; //to enable the box after reset is clicked so false
       boxx.innerText=""; // y empty bcz after reset all boxes should be empty to play new game
    }
    
};



let checkwinner=()=>{ //arrow fn
    for(let pattern of winpattern){ //looping winpattern inside
        let pos1val=boxes[pattern[0]].innerText; //this prints which postition which player has been in console
        let pos2val=boxes[pattern[1]].innerText; //these value x or o is known to next if statement
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" &&  pos3val !="" ){ //if they r nt empty only check
            if(pos1val===pos2val && pos2val===pos3val){ 
                showwinner(pos1val);
                disableboxes(); //after winner is declared still we can continue game to stop that this fn is called
            }


        }
    }
};
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
