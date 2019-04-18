import menuTemplate from "./../hbs/menu.hbs";

export default class Shoes {
  constructor(container, menu, searchBox) {
    this.menu = menu;
    this.container = container;
    this.searchBox = searchBox;

    container.innerHTML = menuTemplate(menu);
    this.search = "";
    searchBox.addEventListener("input", e => {
      this.search = searchBox.value;

      let shoesCpy = [];
      for (let men in menu) {
        if (menu[men].name.search(this.search) >= 0) {
          shoesCpy.push(menu[men]);
        }
      }
      container.innerHTML = menuTemplate(shoesCpy);
    });
  }

  show() {
    this.container.style.display = "block";
    this.searchBox.style.display = "block";
  }

  hide() {
    this.container.style.display = "none";
    this.searchBox.style.display = "none";
  }
}
