import{test,chromium,expect} from "@playwright/test"


test.skip("login using different pw locators", async({page, baseURL}) =>{

    //open login page
    await page.goto(baseURL + "/web/index.php/auth/login")

    //get company logo, then make sure it's visible
    const logoXpath = page.locator("//img[@alt='company-branding']")
    const logoCSS = page.locator("[alt='company-branding']")
    const logoPw = page.getByAltText("company-branding")
    await expect(logoPw).toBeVisible()

    //find from header, and make sure it's visible
    const formHeaderXpath = page.locator("//div[@class='orangehrm-login-slot']//h5")
    const formHeaderCSS  = page.locator(".orangehrm-login-slot >h5")
    const formHeaderPw = page.getByRole("heading", {name: 'Login'})
    await expect(formHeaderPw).toBeVisible()

    //find user name 
    const userNameXpath = page.locator("//input[@name='username']")
    const userNameCSS = page.locator("[name='username']")
    const userNamePw = page.getByPlaceholder('username')
    await userNameXpath.fill('Admin')

    //find password
    const passwordXpath = page.locator("//input[@name='password']")
    const passwordCSS = page.locator("[name='password']")
    const passwordPw = page.getByPlaceholder('password')
    await passwordPw.fill('admin123')

    //find forget password
    const forgetPasswordXpath = page.locator("//div[@class='orangehrm-login-forgot']//p")
    const forgetPasswordCSS = page.locator(".orangehrm-login-forgot >p")
    const forgetPasswordPw = page.getByText("Forgot Your Password? ")
    await expect(forgetPasswordXpath).toBeVisible()

    //find Login Button

    const loginBtnXpath = page.locator("//button[@type='submit']")
    const loginBtnCSS = page.locator('[type="submit"]')
    const loginBtnPw = page.getByRole('button', {type: 'submit'})
    expect(await loginBtnPw.toBeEnabled())
    await loginBtnPw.click()






    
    

 
    
    




})