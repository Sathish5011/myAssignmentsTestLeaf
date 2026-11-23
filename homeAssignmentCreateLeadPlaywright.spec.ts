
import { test, expect } from '@playwright/test';

test('Create Lead using Playwright Locators', async ({ page }) => {

  // 1. Navigate to URL
  await page.goto('http://leaftaps.com/opentaps/control/main');

  // 2. Enter Username
  await page.locator('#username').fill('Demosalesmanager');

  // 3. Enter Password
  await page.locator('#password').fill('crmsfa');

  // 4. Click Login button
  await page.locator('.decorativeSubmit').click();

  // 5. Click CRM/SFA
  await page.getByRole('link', { name: 'CRM/SFA' }).click();

  // 6. Click Leads
  await page.getByRole('link', { name: 'Leads' }).click();

  // 7. Click Create Lead
  await page.getByRole('link', {name: 'Create Lead',exact:true}).click();

  // 8. Fill Company Name
  await page.locator('#createLeadForm_companyName')
    .fill('OpenAI Technologies');

  // 9. Fill First Name
  await page.locator('#createLeadForm_firstName')
    .fill('John');

  // 10. Fill Last Name
  await page.locator('#createLeadForm_lastName')
    .fill('Smith');

  // 11. Fill Salutation
  await page.locator('#createLeadForm_personalTitle')
    .fill('Mr.');

  // 12. Fill Title
  await page.locator('#createLeadForm_generalProfTitle')
    .fill('Automation Tester');

  // 13. Fill Annual Revenue
  await page.locator('#createLeadForm_annualRevenue')
    .fill('500000');

  // 14. Fill Department
  await page.locator('#createLeadForm_departmentName')
    .fill('Testing');

  // 15. Fill Phone Number
  await page.locator('#createLeadForm_primaryPhoneNumber')
    .fill('9876543210');

  // 16. Click Create Lead button
  await page.getByRole('button', { name: 'Create Lead' }).click();

  // Verify Lead creation
  await expect(page.getByText('John', { exact: true })).toBeVisible();

  console.log('Lead created successfully!');

});
