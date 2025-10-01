import {test,expect,chromium} from"@playwright/test"

test.skip("trying filters", async()=>{

    const browser = await chromium.launch()
    const page = await browser.newPage()

    //navigation
    await page.goto('https://automationexercise.com/')

    const productBtn = page.locator('[href="/products"]')
    await productBtn.click()


    //To do using css selectors -> added men tshirt product to the cart and after that varify that product added successfully 

    const addToCartBtn1 = page.locator('[data-product-id="2"]')
    const verifyAddedProduct = page.getByText('Your product has been added to cart.')
    const continueShoppingBtn = page.getByText('Continue Shopping')
    await addToCartBtn1.nth(0).click()
    await expect(verifyAddedProduct).toBeVisible()
    await continueShoppingBtn.click()

    //to do using playwright filtering -> add 'stylish dress' product to the cart, and verify that product added successfully 
    
    const addToCartBtnFilter = page.locator('.productinfo ')
    await addToCartBtnFilter
        .filter({hasText: 'Stylish Dress'})
        .locator('.add-to-cart')
        .nth(0)
        .click()

    await expect(verifyAddedProduct).toBeVisible()
    await continueShoppingBtn.click()

    //To do using filter click on view product on item summer white top, and verify that page of the product opening 
    const viewProductBtn = page.locator('.product-image-wrapper')
    const verifyviewProduct = page.getByText('Summer White Top')
    console.log(
    await viewProductBtn
    .filter({hasText: 'Summer White Top'})
    .getByText('View Product')
    .click()
    )
    await expect(page.url()).toBe('https://automationexercise.com/product_details/6')
    // await expect(page.url()).toContain('details/6')
    







    

})
