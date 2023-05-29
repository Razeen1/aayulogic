let arr=["Hello","qwrt"];
let pressedArr=[];
document.addEventListener('keypress', (event) => {
  var name = event.key;
  var code = event.code;
  keyCheck(name,1);
}, false);
let divMain=div();
document.body.appendChild(divMain);
let txtP=txtShow();
divMain.appendChild(txtP);
function div(){
const mainDiv = document.createElement('div');
mainDiv.classList.add("mainDiv");
mainDiv.style.margin = '10px';
mainDiv.style.display = 'flex';
mainDiv.style.flexDirection='Column';
mainDiv.style.alignItems='center';
mainDiv.style.fontFamily='Courier New';
return mainDiv;
};
function txtShow(){
    const pText = document.createElement('p');
    pText.classList.add("textP");
    pText.style.display = 'flex';
    pText.style.alignItems='center';
    return pText;
}
function inputAnswer(){
    const ansInput = document.createElement('input');
    ansInput.style.display='hidden';
   
}   
function keyCheck(x,y){
    const myArray = arr[y].split('');
    for(i=0;i < myArray.length;i++){
        if(myArray[i].toLowerCase()===x.toLowerCase()){
            alert("present");
            var a=1;
            displayWrong(x);
            break;
        };
    };
    if(a!==1){
        alert("Not present");
        displayWrong(x);
    };      
}
function displayWrong(wrong){
    for(i=0;i=pressedArr.length;i++){
        if(pressedArr==wrong){
            var a=1;
            break;
        }
        
    }if(a!=1){
        let textNodeh = document.createTextNode(wrong);
        txtP.appendChild(textNodeh);
        divMain.appendChild(txtP);
        pressedArr.push(wrong);
    }
    
}