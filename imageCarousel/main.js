const client_ID = "Xy5FVewzbaH374GWrbZQnsBRLFEyU2l7q9iBt6981g8";
let num = 7;
let mainDiv = maindiv();

let slideIndex = 1;
let images = [];
let imageCarDivs = [];
let dots = [];
let idTexts = [];
let likeTexts = [];
let buttonR = buttonChangeR();
let buttonL = buttonChangeL();
let dotDivs = dotDiv();
let textDivs = txtDiv();

const h1 = document.createElement("h1");
const textNode = document.createTextNode("Unsplash Images API Carousel");

h1.appendChild(textNode);
h1.style.zIndex = "1";
h1.style.position = "absolute";
h1.style.color = "white";
h1.style.backgroundImage =
  "linear-gradient(to left, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.200),rgba(8, 8, 8, 0))";
h1.style.padding = "10px";
h1.style.width = "100%";
h1.style.maxWidth = "95%";
h1.style.borderRadius = "10px";
h1.style.textAlign = "center";
h1.style.margin = "0px 20px";
document.body.appendChild(h1);

document.body.appendChild(mainDiv);
mainDiv.appendChild(buttonR);
mainDiv.appendChild(buttonL);

document.body.appendChild(dotDivs);

for (let i = 0; i < num; i++) {
  images[i] = imgDisplay();
  idTexts[i] = txtDiv();
  likeTexts[i] = likeDiv();
  imageCarDivs[i] = imageCarousel();
  mainDiv.appendChild(imageCarDivs[i]);
  imageCarDivs[i].appendChild(likeTexts[i]);
  imageCarDivs[i].appendChild(images[i]);
  imageCarDivs[i].appendChild(idTexts[i]);
}
for (let i = 0; i < num; i++) {
  dots[i] = spanDots();
  dots[i].onclick = function () {
    currentSlide(i + 1);
  };
  dotDivs.appendChild(dots[i]);
}
apiCall();
showSlides(slideIndex);
// testt();

function apiCall() {
  fetch(
    // "./images.json" //From File
    // For api
    "https://api.unsplash.com/photos/random/?count=" +
      num +
      "&client_id=" +
      client_ID
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   image(data);

      for (let i = 0; i < num; i++) {
        let imageElement = document.querySelectorAll("#imgs");
        imageElement[i].src = data[i].urls.regular;
        let imageTxt = document.querySelectorAll(".txtDiv");
        let desc = data[i].alt_description.toUpperCase();
        if (desc == null) {
          desc = "Description";
        }
        imageTxt[i].textContent = desc;
        // let likeTxt = document.querySelectorAll(".likeDiv");
        // likeTxt[i].textContent = "Likes: " + data[i].likes;
      }
    });
}

function maindiv() {
  let container = document.createElement("div");
  container.classList.add("maindiv");
  container.style.position = "relative";
  return container;
}

function imageCarousel() {
  let container = document.createElement("div");
  container.classList.add("imgCar");
  return container;
}
function txtDiv() {
  let container = document.createElement("div");
  container.classList.add("txtDiv");
  container.style.color = "white";
  container.style.fontsize = "15px";
  container.style.padding = " 8px 12px";
  container.style.position = "absolute";
  container.style.bottom = "8px";
  container.style.width = "100%";
  container.style.backgroundImage =
    "linear-gradient(to left, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.200),rgba(8, 8, 8, 0))";
  container.style.textAlign = "center";
  return container;
}

function likeDiv() {
  let container = document.createElement("p");
  container.classList.add("likeDiv");
  container.style.color = "white";
  container.style.fontsize = "15px";
  container.style.padding = " 8px 12px";
  container.style.position = "absolute";
  container.style.top = "40px";
  container.style.width = "98%";
  container.style.textAlign = "right";
  return container;
}

function dotDiv() {
  let container = document.createElement("div");
  container.classList.add("dot");
  container.style.textAlign = "center";
  container.style.backgroundColor = "none";
  return container;
}

function imgDisplay() {
  let imageElement = document.createElement("img");
  imageElement.setAttribute("id", "imgs");
  // imageElement.style.opacity = "0.7";
  imageElement.src = "";
  return imageElement;
}

function spanDots() {
  let spanD = document.createElement("span");
  spanD.classList.add("dots");
  spanD.style.height = "10px";
  spanD.style.width = "10px";
  spanD.style.marginLeft = "2px";
  spanD.style.marginRight = "2px";
  return spanD;
}

function buttonChangeR() {
  let button1 = document.createElement("button");
  button1.classList.add("buttonR");
  button1.style.border = "none";
  button1.style.borderRadius = "5px";
  button1.style.background = "#0a0a0a62";
  button1.style.color = "white";
  button1.style.padding = "10px";
  button1.style.fontSize = "20px";
  button1.style.margin = "10px";
  button1.innerHTML = "<";
  button1.onclick = function () {
    plusSlides(-1);
  };
  return button1;
}
function buttonChangeL() {
  let button1 = document.createElement("button");
  button1.classList.add("buttonL");
  button1.style.border = "none";
  button1.style.borderRadius = "5px";
  button1.style.background = "#0a0a0a62";
  button1.style.color = "white";
  button1.style.padding = "10px";
  button1.style.fontSize = "20px";
  button1.style.margin = "10px";
  button1.style.right = "0";
  button1.innerHTML = ">";
  button1.onclick = function () {
    plusSlides(1);
  };
  return button1;
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".imgCar");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
