const Page = require('./page');
class RegisterPage extends Page{

    //selectors
    get inputUsername () {
        return $('//input[@type="email"]');
    }

    get inputPassword () {
        return $('//input[@type="password"]');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    //Actions
    async clickCreateAccountBtn (username, password) {
        await this.inputUsername.waitForDisplayed();
        await this.inputUsername.setValue(username);
        await this.inputPassword.waitForDisplayed();
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForDisplayed();
        await this.btnSubmit.click();
    }

    open () {
        return super.open('register');
    }



}
module.exports = new RegisterPage()