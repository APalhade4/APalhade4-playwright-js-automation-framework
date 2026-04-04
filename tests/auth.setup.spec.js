
/*NOTE: This file will not work correctly as Website is not mainting proper cookies and session.
Hence storage state does not support here */

import { test } from '@playwright/test'
import fs from 'fs';
import path from 'path';
import LoginPage from '../pages/loginPage';
const config = require('../utils/config.json')


test('01_1_Generate storage state', async({ page }) => {
    const storagePath = path.join(__dirname, '../storage')
    if( !fs.existsSync(storagePath)){
        fs.mkdirSync(storagePath, {recursive: true});
        console.log(`Storage Directory Created:, ${storagePath}`)
    }

    const lp = new LoginPage(page);
    await page.goto('/');
    await lp.LoginToApp(config.Standard_User, config.Password);
    await page.context().storageState({ path: 'storage/auth.json'});
});