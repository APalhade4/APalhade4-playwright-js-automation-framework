export default class HomePage {
    constructor(page) {
        this.page = page;
        this.indexMenu = this.page.getByRole('button', {name:'Open Menu'});
        this.indexMenuList = this.page.locator(`//nav[@class='bm-item-list']/a`);
        this.dropdown = this.page.locator(`//select[@data-test='product-sort-container']`);
        this.dropdownOptions = this.page.locator(`[data-test="product-sort-container"] option`)
    };

    async openIndexMenuBar(){
        await this.indexMenu.click();
    };

    async getIndexMenuList(){
        const items = await this.indexMenuList.allTextContents();
        return items.map( i => i.trim());
    };

    async clickDropdownMenu(){
        await this.dropdown.click();
    };

    async getDropdownOptionsList(){
        const options = await this.dropdownOptions.allTextContents();
        return options.map( i => i.trim());
    };

    async getDropdownOptionsValues(){
        return await this.dropdownOptions.evaluateAll( options => options.map( i => i.value));
    };

    async selectDropdownByValue(value){
        await this.dropdown.selectOption(value)
    };

    async getSelectedValue(){
        return await this.dropdown.inputValue()
    };
};
