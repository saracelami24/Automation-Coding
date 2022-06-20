const RegisterPage = require('../pageobjects/register.page');
const BasicInfoPage = require('../pageobjects/basicinfo.page');
const ConfirmNumberPage = require('../pageobjects/confirmnumber.page');
const configData = require('../config')

describe('Register New Account with invalid credentials', () => {
    it('New Account cant be created with invalid credential', async () => {
        await browser.maximizeWindow();
        await RegisterPage.open();
        await RegisterPage.clickCreateAccountBtn(configData.username, configData.password);
        
    });
});

describe('Register New Account', () => {
    it('New Account is created', async () => {
        await browser.maximizeWindow();
        await RegisterPage.open();
        let randomNum = Math.random();
        await RegisterPage.clickCreateAccountBtn(configData.username + randomNum + configData.domain, configData.password);
    });
});

describe('Continue button is not clickable when we dont fill required information', () => {
    it('Continue Button is not clickable', async () => {
        await BasicInfoPage.checkContinueButtonAvailability();
        
    });
});

describe('Fill Basic Info', () => {
    it('Basic info Form is completed', async () => {
        await BasicInfoPage.clickContinueBtn(configData.fName, configData.lName, configData.mobile, configData.zipcode);
    });
});

describe('Check Confirm Phone Page', () => {
    it('Continue button redirect to Confirm phone page', async () => {
        await ConfirmNumberPage.CheckConfirmNumber();
    });
});


