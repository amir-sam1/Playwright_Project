import { test,expect, chromium } from "@playwright/test";

test.skip("Rigister User", async()=>{

    //generate random email
    const emailAdress = (Math.random() +1 ).toString(36).substring(2) + "@gmail.com"
    console.log("Email is: " + emailAdress);


    //launch Browser
    const browser = await chromium.launch()
    const page = await browser.newPage()

    //navigate to url
    await page.goto('https://automationexercise.com/')

    //click on sighin up login
    const loginBtn = page.locator('[href="/login"]')
    await loginBtn.click()

    //verify that new user in visible
    const newUserMsg = page.getByRole("heading", {name: 'New User Signup!'})
    await expect(newUserMsg).toBeVisible()

    //Enter valid email and address
    const nameInput = page.getByPlaceholder('Name')
    const emailInput = page.locator('//input[@data-qa="signup-email"]')
    const signupBtn = page.getByRole("button", {name: 'Signup'})

    await nameInput.fill('Amirsami')
    await emailInput.fill(emailAdress)
    // await signupBtn.click()
    //to do press enter
    await emailInput.press('Enter')

    //verify that Enter Account Information is visible
    const verifyMsg = page.getByText('Enter Account Information')
    await expect(verifyMsg).toBeVisible()


    //to do radio button 
    const radioTitle = page.locator('#id_gender1')
    const passwordInput = page.locator('#password')

    await radioTitle.check()
    await passwordInput.fill('Am@221136')

    //select check box
    const days = page.locator('#days')
    const months = page.locator('#months')
    const years = page.locator('#years')

    await days.selectOption({value: '5'})
    await months.selectOption({label: 'June'})
    await years.selectOption({value: '1997'})

    //select checkbox
    const checkboxNews = page.getByText('Sign up for our newsletter!')
    await checkboxNews.check(true)
    await expect(checkboxNews).toBeChecked()

    //fill all other data and Address Information

    const firstNameInput = page.locator('#first_name')
    const lastNameInput = page.locator('#last_name')
    const companyInput = page.locator('#company')
    const address1Input = page.locator('#address1')
    const address2Input = page.locator('#address2')
    const countrySelection = page.locator('#country')
    const stateInput = page.locator('#state')
    const cityInput = page.locator('#city')
    const zipcodeInput = page.locator('#zipcode')
    const mobileNumberInput = page.locator('#mobile_number')
    const createAccountBtn = page.getByText('Create Account')

    await firstNameInput.fill('Amir')
    await lastNameInput.fill('samii')
    await companyInput.fill('Bit68')
    await address1Input.fill('2st abd el latif')
    await address2Input.fill('2st abd el latif')
    await countrySelection.selectOption({value: 'Canada'})
    await stateInput.fill('Giza')
    await cityInput.fill('Giza')
    await zipcodeInput.fill('12345')
    await mobileNumberInput.fill('01223440543')
    await createAccountBtn.click()
    
    //verfiy that account created successfully
    const verfiyCreateAccountMsg = page.getByText('ACCOUNT CREATED!')
    await expect(verfiyCreateAccountMsg).toBeVisible()



    





















})

