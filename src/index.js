import "./css/styles.css";

import Nav from "./js/nav";
import Page from "./js/page";
import Shoes from "./js/menu";
import Slides from "./js/slides";
import Footer from "./js/footer";

let currentPage = "home";

let menu, page, orderMenu;
let txt;
let appEL = document.getElementById("app");

let shoes = fetch("api/menu.json").then(r => r.json());
let pages = fetch("api/pages.json").then(r => r.json());
let slidesFetch = fetch("api/slides.json").then(r => r.json());
let footerFetch = fetch("api/footer.json").then(r => r.json());

let allPages, shoeData, shoesComponent, slidesData, slidesComponent;
let footerData, footerComponent, footer;

Promise.all([shoes, pages, slidesFetch, footerFetch]).then(result => {
  shoeData = result[0];
  allPages = result[1];
  slidesData = result[2];
  footerData = result[3];

  footerComponent = new Footer(footerData, document.getElementById("footer"));
  slidesComponent = new Slides(
    slidesData,
    document.getElementById("slideShow")
  );

  shoesComponent = new Shoes(
    document.getElementById("menu"),
    shoeData,
    document.querySelector("#shoeSearch")
  );

  menu = new Nav(allPages, document.querySelector("nav"), item => {
    currentPage = item;
    render();
  });

  render();
});

let render = () => {
  page = new Page(allPages[currentPage]);
  appEL.innerHTML = page.getPage();

  if (currentPage === "menu") {
    shoesComponent.show();
  } else {
    shoesComponent.hide();
  }

  if (currentPage === "about") {
    slidesComponent.show();
  } else {
    slidesComponent.hide();
  }
  footerComponent.getFooter();

  if (currentPage == "home") {
    orderMenu = document.getElementsByClassName("men");
    for (let i = 0; i < orderMenu.length - 1; i++) {
      orderMenu[i].addEventListener("click", () => {
        alert("Would you like to order something?");

        if (confirm("You are sure you want to order?")) {
          txt = "Here is your order form";
          alert(txt);
        } else {
          txt = "You pressed Cancel!";
          alert(txt);
        }
      });
    }
  }
};
