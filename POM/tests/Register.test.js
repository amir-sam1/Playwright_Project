import {test, expect} from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Account_createdPage from "../pages/Account_createdPage";
import Account_deletedPage from "../pages/Account_deletedPage";

let homePage, loginPage, randomEmail, signupPage, accountCreatePage, accountDeletedPage

test.beforeEach(async({page})=>{
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    signupPage = new SignupPage(page)
    accountCreatePage = new Account_createdPage(page)
    accountDeletedPage = new Account_deletedPage(page)


    randomEmail= (Math.random() + 1).toString(36).substring(2) + "@gmail.com"
    await loginPage.navigate()
    
})



test.describe('Register user', async()=>{

    test.only("Register user with new email address", async({page})=>{

        //from login page verify that new user signup text is visible
        expect(await loginPage.getElementByText('New User Signup!'))

        //signup with name and random email
        await loginPage.signup(process.env.SIGHNUP_NAME,randomEmail)

        //verify that enter account info text is visible
        await expect(await signupPage.getElementByText('Enter Account Information')).toBeVisible()

        //fill all account information
        await signupPage.fillAccountInfoData()

        //verify that account created  text msg visible
        await expect(accountCreatePage.msgAccountCreate).toBeVisible()
        
        //click on continue btn
        await accountCreatePage.continueBtn.click()

        //verify that logged in as mohamed in home page 
        await expect(await homePage.getElementByText(' Logged in as amir')).toBeVisible();

        //click on delete account button from header page 
        await homePage.deleteAccount()

        //verify that account deleted text is visible
        await expect(await accountDeletedPage.msgAccountDeleted).toBeVisible()





    })


    test("Register user with existing email address", async({page})=>{

    })

})
