// const arr = ["abcd", "xyz","qweui","rtyope","iopzuwz"];
const arr = ["Banana", "Apple","Halloween","Bottle","abc"];
const selected=Math.floor(Math.random() * 4);
var lives=9;

let divMain = div();
document.body.appendChild(divMain);
var pressedArr = [];
var correctArr = [];


let buttonC = createButton();
var txtP = txtShow();
var txtC = txtShowLine();
var txtR = txtShowRight();

divMain.appendChild(buttonC);
// hangMan();

function startGame(){
    document.querySelector('.start').style.display="none";
    // divMain.appendChild(buttonC);
    
    document.addEventListener('keydown', (event) => {
    var name = event.key;
    var charCode = event.which;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
        keyCheck(name, selected);
    }
    }, false);

    divMain.appendChild(txtR);
    divMain.appendChild(txtP);
    divMain.appendChild(txtC);
    displayLine();
    canvas();
}

function createButton(){
    let buttonC = document.createElement('button');
    buttonC.classList.add("start");
    buttonC.style.border = 'none';
    buttonC.style.borderRadius= '5px';
    buttonC.style.background = 'black';
    buttonC.style.color = 'white';
    buttonC.style.padding = '10px';
    buttonC.style.margin = '10px';
    buttonC.innerHTML = 'Start Game';
    buttonC.onclick=function() { startGame(); };
    
    return buttonC;
}
var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
    
}

function div() {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add("mainDiv");
    mainDiv.style.margin = '10px';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'Column';
    mainDiv.style.alignItems = 'center';
    mainDiv.style.fontFamily = 'Courier New';
    return mainDiv;
};
function txtShow() {
    const pText = document.createElement('p');
    pText.classList.add("textP");
    pText.style.display = 'flex';
    pText.style.alignItems = 'center';
    return pText;
}
function txtShowRight() {
    const pText = document.createElement('p');
    pText.classList.add("textR");
    pText.style.display = 'flex';
    pText.style.alignItems = 'center';
    return pText;
}
function txtShowLine() {
    const pText = document.createElement('p');
    pText.classList.add("textC");
    pText.style.display = 'flex';
    pText.style.alignItems = 'center';
    return pText;
}
function inputAnswer() {
    const ansInput = document.createElement('input');
    ansInput.style.display = 'hidden';

}
function keyCheck(x, y) {
    const myArray = arr[y].split('');
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i].toLowerCase() === x.toLowerCase()) {
            var a = 1;
            break;
        };
    };
    if (a !== 1) {
        alert("Not present");
        displayWrong(x);
        if(lives!=-1){
        animate();
        lives-=1;}else {
            endGame();
        }
    } else {
        displayR(x);
        displayWrong(x);
        
    }
}
function displayWrong(wrong) {
    for (i = 0; i < pressedArr.length; i++) {
        if (pressedArr[i] == wrong) {
            var a = 1;
            break;
        }

    }
    if (a != 1) {
        let textNodeh = document.createTextNode(wrong);
        txtP.appendChild(textNodeh);
        divMain.appendChild(txtP);
        pressedArr.push(wrong);
    }
}
function displayLines(){
    let displayLines= document.createElement('p');
    let textNodeh = document.createTextNode("_ ");
    txtC.appendChild(textNodeh);
    divMain.appendChild(txtC);
}
function displayLine(l){
    let selectedNum=arr[selected];
 
    for (let i = 0; i < selectedNum.length; i++) {
        displayLines();
    }
}
function displayRight(as){
    var corr=correctArr.toString()
    document.querySelector(".textR").innerHTML=corr;
    console.log(correctArr);
    // txtR.appendChild(textNodeh);
    // divMain.appendChild(txtR);
}
function displayR(lq){
    let selectedWord=arr[selected].split('');
    for (i = 0; i < pressedArr.length; i++) {
        if (pressedArr[i] === lq) {
            var ad = 1;
            break;
        }

    }
    if (ad != 1) {
        correctArr[selectedWord.indexOf(lq)]=lq;
        displayRight(lq);
    }
    finishGameWin();
        
}
function finishGameWin(){
    let selectedNum=arr[selected].split('');
    if(correctArr.toString()==selectedNum.toString()){
        
        setTimeout(function() {
            alert("You win");
            endGame();
          }, 1000);
          
        
        
    }
}
function endGame(){
    alert("Game Finish");
    pressedArr = [];
    correctArr = [];
    // document.body.removeChild(divMain);
    document.querySelector(".textP").innerHTML="";
    document.querySelector(".textC").innerHTML="";
    document.querySelector(".textR").innerHTML="";
    txtP.parentNode.removeChild(txtP);
    txtC.parentNode.removeChild(txtC);
    txtR.parentNode.removeChild(txtR);
    context.clearRect(0, 0, 400, 400);
    lives=9;
    // document.body.appendChild(divMain);
    document.querySelector('.start').style.display="block";
    
}

// function hangMan(){
//    let draw= document.createElement("context");
//    draw.setAttribute('id',"stickman");
//    divMain.appendChild(draw);
// }
 function canvas(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
  };
 function head(){
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
  }
  
 function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
  
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke(); 
}

 function frame1() {
   draw (0, 150, 150, 150);
 };
 
  function frame2 () {
   draw (10, 0, 10, 600);
 };

  function frame3() {
   draw (0, 5, 70, 5);
 };

 function frame4 () {
   draw (60, 5, 60, 15);
 };

 function torso () {
   draw (60, 36, 60, 70);
 };

  function rightArm() {
   draw (60, 46, 100, 50);
 };

 function leftArm () {
   draw (60, 46, 20, 50);
 };

 function rightLeg () {
   draw (60, 70, 100, 100);
 };

  function leftLeg() {
   draw (60, 70, 20, 100);
 };

 const drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 

