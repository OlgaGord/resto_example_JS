import slideTemplate from "./../hbs/slides.hbs";

let currSlide = 0;
let elTmp;
let imageIndex = 0;
let time = 2000;
let time2 = time / 2;
let desc;
let name;
export default class Slides {
  constructor(slidesData, container) {
    this.slidesData = slidesData;
    this.container = container;
    // let imgs = slidesData.map(v => v.src);
    desc = document.createElement("span");
    elTmp = document.createElement("img");
    elTmp.className = "picture pictTransOut";
    container.appendChild(elTmp);
    container.appendChild(desc);

    setInterval(() => {
      elTmp.src = "img/" + slidesData[imageIndex].src;
      desc.innerHTML = slidesData[imageIndex].description;
      elTmp.style.opacity = 1;
      if (imageIndex === slidesData.length - 1) {
        imageIndex = 0;
      } else {
        imageIndex++;
      }
    }, time);

    setInterval(() => {
      elTmp.style.opacity = 0;
    }, 2500);
  }
  show() {
    this.container.style.display = "block";
  }

  hide() {
    this.container.style.display = "none";
  }
}
