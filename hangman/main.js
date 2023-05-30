const arr = ["banana", "apple","halloween","bottle","laptop"];
const selected=Math.floor(Math.random() * arr.length);
var lives=9;

let divMain = div();

var topdiv=document.getElementById("topDiv");
var main=document.getElementById("main");
const h1 = document.createElement("h1");
const textNode = document.createTextNode("Hang Man");
h1.style.textAlign="center";
h1.appendChild(textNode);
// main.appendChild(h1);
topdiv.parentNode.insertBefore(h1, topdiv);
topdiv.appendChild(divMain);

var pressedArr = [];
var correctArr = [];

let buttonC = createButton();
let buttonH = createButton2();

var txtP = txtShow();
var txtC = txtShowLine();
var txtR = txtShowRight();

divMain.appendChild(buttonC);

function startGame(){
    document.querySelector('.start').style.display="none";
    
    document.addEventListener('keydown', (event) => {
    var name = event.key;
    var charCode = event.which;
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
        keyCheck(name, selected);
    }
    }, false);
    divMain.appendChild(buttonH);
    divMain.appendChild(txtP);
    divMain.appendChild(txtR);
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

function createButton2(){
    let buttonC = document.createElement('button');
    buttonC.classList.add("hint");
    buttonC.style.border = 'none';
    buttonC.style.borderRadius= '5px';
    buttonC.style.background = 'black';
    buttonC.style.color = 'white';
    buttonC.style.padding = '10px';
    buttonC.style.margin = '10px';
    buttonC.innerHTML = 'Hint';
    buttonC.onclick=function() { hint(); };
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
    a=0;
    for (i = 0; i < myArray.length; i++) {
        if (myArray[i].toLowerCase() === x.toLowerCase()) {
            var a = 1;
            break;
            
        };
    };
    if (a !== 1) {
        document.querySelector(".textC").innerHTML="Not Present";
        displayWrong(x,1);
        
    } else {
        document.querySelector(".textC").innerHTML="";
        displayR(x);
        displayWrong(x,2);
        
    }
}
function displayWrong(wrong,qw) {
    for (i = 0; i < pressedArr.length; i++) {
        if (pressedArr[i] == wrong) {
            var a = 1;
            break;
        }
    }
    if (a != 1) {
        let textNodeh = document.createTextNode(wrong.toUpperCase()+" ");
        txtP.appendChild(textNodeh);
        divMain.appendChild(txtP);
        pressedArr.push(wrong);
        if(qw!==2){
        if(lives!=-1){
            animate();
            lives-=1;
        }
            else {
                document.querySelector(".textR").innerHTML="You lose! The word was: "+arr[selected].toUpperCase();
            }
        }
    }
}
function displayLines(){
    let selectedNum=arr[selected];
    correct = document.createElement('ul');
    correct.style.display="flex";

    for (var i = 0; i < selectedNum.length; i++) {
        correct.setAttribute('id', 'myword');
        guess = document.createElement('li');
        
        // guess.setAttribute('class', 'guess');
        guess.innerHTML = "_";
        divMain.appendChild(correct);
      correct.appendChild(guess);
    }
}
function displayLine(l){
        displayLines();
}
function displayR(lq){
    let selectedWord=arr[selected].split('');
    for (i = 0; i < correctArr.length; i++) {
        if (pressedArr[i] === lq) {
            var ad = 1;
            break;
        }
    }
    if (ad != 1) {
        var indices = [];
        var li = document.querySelectorAll("ul > li");;
        
        for(var i=0; i<selectedWord.length;i++) {
        if (selectedWord[i] == lq){
            indices.push(i);
        } 
        }
        for(var i=0; i<indices.length;i++) {
            correctArr[indices[i]]=lq;
            li[indices[i]].innerHTML=lq.toUpperCase();
            
            }
    }
    finishGameWin();
        
}
function finishGameWin(){
    let selectedNum=arr[selected].split('');
    if(correctArr.toString()==selectedNum.toString()){
        
        setTimeout(function() {
            document.querySelector(".textR").innerHTML="Game Finish! You Win!";
          }, 500);
    }
}
function endGame(win){
    if(win==1){
        alert("Game Finish! You Win! ");
    }else{
        alert("You lose! The word was: "+arr[selected]);
    }
    
    pressedArr = [];
    correctArr = [];
    // document.querySelector(".textP").innerHTML="";
    txtP.parentNode.removeChild(txtP);
    correct.parentNode.removeChild(correct);
    buttonH.parentNode.removeChild(buttonH);
    context.clearRect(0, 0, 400, 400);
    lives=9;
    document.querySelector('.start').style.display="block";

}

function hint(){
    randomElement=randomNoRepeats();
    var randomElement = randomNoRepeats();
    var hintC=randomElement();
    
    for (i = 0; i < correctArr.length; i++) {
        if (correctArr[i] === hintC) {
            var ad = 1;
            break;
        }
    }if(ad!=1){
        displayR(hintC);
    }
    
}
function randomNoRepeats() {
    let selectedNum=arr[selected].split('');
    var copy = selectedNum.slice(0);
  
    return function(){
      if (copy.length < 1) { copy = selectedNum.slice(0); }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

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

