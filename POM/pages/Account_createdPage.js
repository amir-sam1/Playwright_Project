import BasePage from "./BasePage";

class Account_createdPage extends BasePage{

    constructor(page){
        super(page)
        //locators
        this.msgAccountCreate = page.getByText('Account Created!')
        this.continueBtn = page.locator('[data-qa="continue-button"]')


    }



}

export default Account_createdPage