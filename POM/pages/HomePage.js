import BasePage from "./BasePage";

class HomePage extends BasePage{
     constructor(page) {
        super(page);
        // locators
        this.deleteAccountBtn = page.locator('[href="/delete_account"]')

    }

       // methods
    async navigate() {
        await super.navigate('/');
    }

    async deleteAccount(){
        await this.deleteAccountBtn.click()
    }



}

export default HomePage