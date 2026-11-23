import {test} from "@playwright/test";

test('learning create lead using a CSS Selector', async({page})=> {
    
    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator("#username").fill('democsr2')
    await page.locator('[id="password"]').fill('crmsfa')
    await page.locator('[type="submit"]').click()
    await page.locator('text=CRM/SFA').click()

    await page.waitForLoadState('domcontentloaded')

    await page.locator('[href="/crmsfa/control/leadsMain"]').click()
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('[id="createLeadForm_companyName"]').fill('Adrenalin eSystem')
    //await page.waitForLoadState('domcontentloaded')

    await page.locator('[id="createLeadForm_firstName"]').fill('Sathishkumar')
    await page.locator('[id="createLeadForm_lastName"]').fill('Balasubramanian')
    await page.locator('[id="createLeadForm_personalTitle"]').fill('Mr')
    

    await page.locator('[name="generalProfTitle"]').fill('Test Engineer')
    await page.locator('[id="createLeadForm_annualRevenue"]').fill('800000')
    await page.locator('[name="departmentName"]').fill('QA')
    //await page.waitForTimeout(3000)

    //locating the source dropdown and iterate all the option
    let sourceDrop = page.locator('[name="dataSourceId"]>Option')

    let sourceCount = await sourceDrop.count()
    for (let index = 0; index < sourceCount; index++) {
        console.log('Source dropdown values are:',await sourceDrop.nth(index).textContent());
        
        
    }

    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill('8667322291')


    await page.locator('[class="smallSubmit"]').click()

})
