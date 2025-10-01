import{test, chromium, expect} from"@playwright/test"



test.only("accept alerts",async()=>{
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //To do handel diloag to accept
    page.on('dialog',async dialog=>{

        console.log(dialog.message())
        await dialog.accept('Hi, I am Amir')

    }
    )

    //click on js alert, then verify the result text
    const alertBtn = page.getByText('Click for JS Alert')
    const result = page.locator('#result')
    await alertBtn.click()
    expect(await result.innerText()).toContain('You successfully clicked an alert')

    //click on js confirm, then verify the result text
    const jsConfirmBtn =page.getByRole('button', {name: 'Click for JS Confirm'})
    await jsConfirmBtn.click()
    expect(await result.innerText()).toContain('You clicked: Ok')

    //click on js prompot, then verify the  result text
    const jspromptBtn = page.getByRole('button', {name: 'Click for JS Prompt'})
    await jspromptBtn.click()
    expect(await result.innerText()).toContain('You entered: Hi, I am Amir')



})





test.only("dismiss alerts", async()=>{

    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //To do handel diloag to dismiss
    page.on('dialog', dialog=>dialog.dismiss())
    //click on js confirm, then verify the result text
    const jsConfirmBtn =page.getByRole('button', {name: 'Click for JS Confirm'})
    const result = page.locator('#result')

    await jsConfirmBtn.click()

    expect(await result.innerText()).toContain('You clicked: Cancel')








})