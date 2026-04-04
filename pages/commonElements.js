export default class CommonElements{
    constructor(page){
        this.page = page;
        this.closeButton = this.page.getByRole('button', {name: 'Close Menu'});
    }

    async clickCloseButton(){
        await this.closeButton.click();
    }
}