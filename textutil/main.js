

var container1=container();

document.body.appendChild(container1);

const title = document.createElement("h1");
const textN = document.createTextNode("Text Util");
title.appendChild(textN);
container1.appendChild(title);

var containerButton=container2();
var containerResult=container3();

container1.appendChild(createTextArea());
container1.appendChild(containerButton);

containerButton.appendChild(createButtonUpper());
containerButton.appendChild(createButtonLower());
containerButton.appendChild(createButtonRemove());
containerButton.appendChild(createClear());

//Add button to count
// containerButton.appendChild(createButtonCount());
// containerButton.appendChild(createButtonWords());


container1.appendChild(containerResult);

const h1 = document.createElement("h4");
const textNode = document.createTextNode("Length:");
h1.style.padding = '20px';
h1.appendChild(textNode);
containerResult.appendChild(h1);

const p = document.createElement("h4");
const textNodeP = document.createTextNode("");
p.style.padding = '20px';
p.classList.add("p1");
p.appendChild(textNodeP);
containerResult.appendChild(p);

const h4 = document.createElement("h4");
const textNodeh = document.createTextNode("Word:");
h4.style.padding = '20px';
h4.appendChild(textNodeh);
containerResult.appendChild(h4);

const p2 = document.createElement("h4");
const textNodeP2 = document.createTextNode("");
p2.style.padding = '20px';
p2.classList.add("p2");
p2.appendChild(textNodeP2);
containerResult.appendChild(p2);

function container(){
    let container = document.createElement('div');
    container.classList.add('topdiv');
    container.style.margin = '40px';
    container.style.display = 'flex';
    container.style.flexDirection='Column';
    container.style.alignItems='center';
    container.style.fontFamily='Courier New';
    return container;
}
function container2(){
    let container = document.createElement('div');
    container.classList.add('buttons');
    container.style.padding = '20px';
    return container;
}
function container3(){
    let container = document.createElement('div');
    container.classList.add('Result');
    container.style.display = 'flex';
    container.style.alignItems='center';
    return container;
}
function createTextArea(){
    let txtarea = document.createElement('textarea');
    txtarea.classList.add("txtArea");
    txtarea.style.width = '100%';
    txtarea.style.height = '150px';
    txtarea.style.color= 'white';
    txtarea.style.backgroundColor = 'black';
    txtarea.style.border = 'none';
    txtarea.addEventListener("input", function() {
        countLength(),countWords()  
      });
    return txtarea;
};

function createButtonUpper(){
    let buttonUpper = document.createElement('button');
    buttonUpper.classList.add("upperB");
    buttonUpper.style.border = 'none';
    buttonUpper.style.borderRadius= '5px';
    buttonUpper.style.background = 'black';
    buttonUpper.style.color = 'white';
    buttonUpper.style.padding = '10px';
    buttonUpper.style.margin = '10px';
    buttonUpper.innerHTML = 'Covert To Uppercase';
    buttonUpper.onclick=function() { textDisplayUpper(); };

    return buttonUpper;
};
function createButtonLower(){
    let buttonLower = document.createElement('button');
    buttonLower.classList.add("lowerB");
    buttonLower.style.border = 'none';
    buttonLower.style.borderRadius= '5px';
    buttonLower.style.background = 'black';
    buttonLower.style.color = 'white';
    buttonLower.style.padding = '10px';
    buttonLower.style.margin = '10px';
    buttonLower.onclick=function() { textDisplayLower(); };
    buttonLower.innerHTML = 'Covert To Lowercase';
    return buttonLower;
};

//Button to count word
// function createButtonCount(){
//     let buttonCount = document.createElement('button');
//     buttonCount.classList.add("countB");
//     buttonCount.style.backgroundColor = 'white';
//     buttonCount.innerHTML = 'Count Characters';
//     buttonCount.onclick=function() { countLength(); };
//     return buttonCount;
// };
// function createButtonWords(){
//     let buttonCount = document.createElement('button');
//     buttonCount.classList.add("countW");
//     buttonCount.style.backgroundColor = 'white';
//     buttonCount.innerHTML = 'Count Words';
//     buttonCount.onclick=function() { countWords(); };
//     return buttonCount;
// };

function createButtonRemove(){
    let buttonCount = document.createElement('button');
    buttonCount.classList.add("removeB");
    buttonCount.innerHTML = 'Remove spaces';
    buttonCount.style.border = 'none';
    buttonCount.style.borderRadius= '5px';
    buttonCount.style.background = 'black';
    buttonCount.style.color = 'white';
    buttonCount.style.padding = '10px';
    buttonCount.style.margin = '10px';
    buttonCount.onclick=function() { removeDouble(); };
    return buttonCount;
};

function createClear(){
    let buttonLower = document.createElement('button');
    buttonLower.classList.add("clearB");
    buttonLower.style.border = 'none';
    buttonLower.style.borderRadius= '5px';
    buttonLower.style.background = 'black';
    buttonLower.style.color = 'white';
    buttonLower.style.padding = '10px';
    buttonLower.style.margin = '10px';
    buttonLower.onclick=function() { textDisplay(""); };
    buttonLower.innerHTML = 'Clear Text';
    return buttonLower;
};


function textDisplayUpper(){
    var stt=document.querySelector('textarea').value;
    stt=stt.toUpperCase();
    textDisplay(stt);
}
function textDisplayLower(){
    var stt=document.querySelector('textarea').value;
    stt=stt.toLowerCase();
    textDisplay(stt);
}
function countLength(){
    var stt=document.querySelector('textarea').value;
    var countLength=stt.length;
    appendText(countLength);
}
function countWords(){
    var stt=document.querySelector('textarea').value;
    stt=stt.replace(/\s+/g, ' ').trim();
    const arr = stt.split(' ');
    var coutnWords=arr.filter(word => word !== '').length;
    appendText2(coutnWords);
}
function removeDouble (){
    var stt=document.querySelector('textarea').value;
    stt=stt.replace(/\s+/g, ' ').trim();
    textDisplay(stt);
}
function textDisplay(sttt){
    document.querySelector('textarea').value= sttt;
}
function appendText(count){
    document.querySelector('.p1').innerHTML= count;
}
function appendText2(count){
    document.querySelector('.p2').innerHTML= count;
}