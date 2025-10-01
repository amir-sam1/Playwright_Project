
import BasePage from "./BasePage";

class Account_deletedPage extends BasePage{

    constructor(page){
        super(page)
        //locators
        this.msgAccountDeleted = page.getByText('Account Deleted!')
        
      


    }



}

export default Account_deletedPage