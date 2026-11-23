import { test } from "@playwright/test";

test('Learning locators', async ({page}) => {

    await page.goto('https://login.salesforce.com/')
     await page.locator('[id="identifier-11"]').fill('sathishkumarb5011@gmail.com')
     await page.locator('[type="button"]').click()
     await page.locator('[name="password"]').fill('Sathish@26')
     await page.locator('[class="slds-button slds-button--brand slds-button_stretch slds-m-bottom_x-small gid-button slds-m-top--small"]').click()
     await page.waitForTimeout(4000)
     await page.waitForURL(/lightning/)
     await page.locator('[class="slds-icon-waffle"]').click()
     await page.getByText('View All',{exact: true}).click()
     await page.getByText('Sales',{exact:true}).click()
     await page.getByText('Leads', {exact:true}).click()
     await page.getByRole('button',{name: "New"}).click()
       await page.getByLabel('Salutation').click();
  await page.getByText('Mr.', { exact: true }).click()
  await page.getByLabel('Last Name').fill('PlaywrightTest')
  await page.getByLabel('Company').fill('OpenAI Test Company')
  await page.getByRole('button', { name: 'Save' }).click()
  await page.getByText('sdgrerg', { exact: true })

  console.log('SUCCESS: Salesforce Lead created and verified.')

    })