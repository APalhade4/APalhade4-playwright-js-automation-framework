import { test as base } from '@playwright/test'
import LoginPage from '../pages/loginPage';
const config = require('../utils/config.json')


export const test = base.extend({
    page: async({ page }, use) => {
        page.goto('/');
        const lp = new LoginPage(page);
        await lp.LoginToApp(config.Standard_User, config.Password)
        await use(page);
    }
})