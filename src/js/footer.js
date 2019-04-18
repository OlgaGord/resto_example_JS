import footerTemplate from "./../hbs/footer.hbs";
export default class Footer {
    constructor(footerData, container) {
        this.footerData = footerData;
        this.container = container;
        container.innerHTML = footerTemplate(footerData);
    }

    getFooter() {
        return (footerTemplate(this.footerData));
    }


}
