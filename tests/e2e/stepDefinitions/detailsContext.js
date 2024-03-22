const {Given,When, Then} = require('@cucumber/cucumber');
const { expect } = require("@playwright/test");

const url = 'http://localhost:8080/'
const home = '//nav/div[1]/a[@href="/"]'   
const details= '//a[@href="/cocktail/17222"]' 
const detailedInfo = '//*[@id="root"]/div/div'

Given('the user has navigated to the home page', async function () {
    await page.goto(url)
    const locator = await page.locator(home)
    await expect(locator).toBeVisible()
});

When('the user navigates to details page of a cocktail', async function () {
    await page.click(details)
});

Then('the user should see the details of the cocktail', async function () {
    const locator = await page.locator(detailedInfo)
    expect(locator).toBeVisible() 
});