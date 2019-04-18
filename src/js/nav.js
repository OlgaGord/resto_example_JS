import navTemplate from "./../hbs/nav.hbs";

export default class Nav {

    constructor(pages, container, callback) {
        container.innerHTML = navTemplate(pages);
        this.elements = container.querySelectorAll("a");

        for (let page in pages) {
            if (pages[page].default) {
                this.setPage(page);
            }
        }

        let me = this;
        this.elements.forEach(function (el) {

            el.addEventListener("click", () => {
                me.setPage(el.dataset.page);
                callback(el.dataset.page);
            })
        })
    }

    setPage(id) {
        this.elements.forEach((el) => {
            if (id === el.dataset.page) {
                el.classList.add("active");
                el.classList.remove("inactive");
            } else {
                el.classList.add("inactive");
                el.classList.remove("active");
            }
        })
    }



    // getNav(activePage) {
    //     for (let e in this.pages) {
    //         if (activePage == e) {
    //             this.pages[e].active = true;
    //         } else {
    //             this.pages[e].active = false;
    //         }
    //     }
    //     return navTemplate(this.pages);
    // }
}