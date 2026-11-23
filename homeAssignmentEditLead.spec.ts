
import { test } from "@playwright/test"

test('Learning edit lead using playwright', async ({page}) => {
    
  await page.goto('http://leaftaps.com/opentaps/control/main');

  await page.locator('#username').fill('democsr2')

  await page.locator('#password').fill('crmsfa');

  await page.locator('.decorativeSubmit').click()

  
  await page.getByRole('link', { name: 'CRM/SFA' }).click()

  await page.getByRole('link', { name: 'Leads' }).click()

 
  await page.getByRole('link', { name: 'Create Lead' }).click()

  await page.locator('#createLeadForm_companyName').fill('OpenAI Technologies')

  
  await page.locator('#createLeadForm_firstName').fill('John')

  
  await page.locator('#createLeadForm_lastName').fill('Smith')

  
  await page.locator('.smallSubmit').click()

  
  await page.getByText('John', { exact: true })

  console.log('Lead created successfully')

  await page.getByRole('link', { name: 'Edit' }).click()


  await page.locator('#updateLeadForm_companyName')
    .fill('OpenAI Solutions')

  await page.locator('.smallSubmit').click()

  await page.getByText('OpenAI Solutions', { exact: true })

  console.log('Lead company name updated successfully')


})
