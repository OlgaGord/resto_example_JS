import pageTemplate from './../hbs/page.hbs';

export default class Page {

    constructor(page) {
        this.page = page;
    }

    getPage() {
        return (pageTemplate(this.page));
    }
}