import { expect } from "@playwright/test";

import BasePage from "./BasePage";

class SignupPage extends BasePage{
    constructor(page){
        super(page)
        //locators
        this.getTextMsgInfo = page.getByText('Enter Account Information')
        this.genderCheckBox = page.locator('[id="id_gender1"]')
        this.passwordInput = page.locator('[id="password"]')
        this.selectDateByDay = page.locator('[id="days"]')
        this.selectDateByMonth = page.locator('[id="months"]')
        this.selectDateByYear = page.locator('[id="years"]')
        
        this.selectCheckBox1 = page.getByText('Sign up for our newsletter!')
        this.selectCheckBox2 = page.getByText('Receive special offers from our partners!')

        this.firstNameInput = page.locator('[id="first_name"]')
        this.firstLastInput = page.locator('#last_name')
        this.companyInput = page.locator('#company')
        this.address1Input = page.locator('#address1')
        this.address2Input = page.locator('#address2')
        this.selectCountry = page.locator('#country')
        this.stateInput = page.locator('#state')
        this.cityInput = page.locator('#city')
        this.zipCodeInput = page.locator('#zipcode')
        this.mobileNumberInput = page.locator('#mobile_number')
        this.createAccountBtn = page.getByText('Create Account')



        

        





    }


    async navigate(){
        await super.navigate('/signup')

    }

    async fillAccountInfoData(){

        await this.genderCheckBox.check()
        await this.passwordInput.fill('Am@112233')
        await this.selectDateByDay.selectOption({value: '22'})
        await this.selectDateByMonth.selectOption({Option: 'January'})
        await this.selectDateByYear.selectOption({option: '1997'})
        await this.selectCheckBox1.check()
        await this.selectCheckBox2.check()

        await this.firstNameInput.fill('amir')
        await this.firstLastInput.fill('sami')
        await this.companyInput.fill('bit68')
        await this.address1Input.fill('2st abd')
        await this.address2Input.fill('2st abd')
        await this.selectCountry.selectOption({value: 'United States'})
        await this.stateInput.fill('Cairo')
        await this.cityInput.fill('Giza')
        await this.zipCodeInput.fill('11111')
        await this.mobileNumberInput.fill('12345678889')
        await this.createAccountBtn.click()

    }

   




}


export default SignupPage