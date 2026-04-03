export default class LoginPage{
    constructor(page){
        this.page = page;
        this.usernameText = this.page.locator(`//div/input[contains(@id, 'user-name')]`);
        this.passwordText = this.page.locator(`//div/input[contains(@id, 'password')]`);
        this.loginButton = this.page.locator(`//div//input[contains(@id, 'login-button')]`);
        this.errorMessage = this.page.locator(`//div//h3[contains(text(), 'Epic sadface: User')]`);
    }

    async LoginToApp(user, pass){
        await this.usernameText.fill(user);
        await this.passwordText.fill(pass);
        await this.loginButton.click();
    };

    async verifyErrorMessage(){
        return await this.errorMessage.textContent();
    };
}