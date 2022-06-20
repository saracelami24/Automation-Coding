
class BasicInfoPage{

    //selectors
    get firstName () {
        return $('//input[@name="firstName"]');
    }

    get lastName () {
        return $('//input[@name="lastName"]');
    }

    get mobileNumber () {
        return $('//input[@name="mobile"]');
    }

    get zipCode () {
        return $('//input[@automation-id="zip-code-answer"]');
    }

    get qualification () {
        return $('//md-radio-button[@value="CNA"]');
    }

    get shifts () {
        return $('//md-checkbox[@aria-label="Overnight Checkbox"]');
    }

    get workExperience () {
        return $('//md-radio-button[@value="4_6_Months"]');
    }

    get agreeTermsAndServices () {
        return $('//md-checkbox[@automation-id="termsAccept-answer"]');
    }

    get continueBtn () {
        return $('//button[@id="AP_Basic_Info_continue"]');
    }
    

    //actions
    async checkContinueButtonAvailability(){
        await this.continueBtn.waitForDisplayed();
        await expect(this.continueBtn).not.toBeClickable();
    
    }
    async clickContinueBtn (fname, lname, number, zipcode) {
        await this.firstName.waitForDisplayed();
        await this.firstName.setValue(fname);
        await this.lastName.waitForDisplayed();
        await this.lastName.setValue(lname);
        await this.mobileNumber.waitForDisplayed();
        await this.mobileNumber.setValue(number);
        await this.zipCode.waitForDisplayed();
        await this.zipCode.setValue(zipcode);
        await this.qualification.waitForDisplayed();
        await this.qualification.click();
        await this.shifts.scrollIntoView();
        await this.shifts.click();
        await this.workExperience.waitForDisplayed();
        await this.workExperience.click();
        await this.agreeTermsAndServices.waitForDisplayed();
        await this.agreeTermsAndServices.click();
        await this.continueBtn.waitForDisplayed();
        await this.continueBtn.click();
    }


    
    open () {
        return super.open('basicinfo');
    }

} 
module.exports = new BasicInfoPage()