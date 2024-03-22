const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const url = 'http://localhost:8080/'
const home = '//nav/div[1]/a[@href="/"]'
const name = '#name'
const notMatched= '//div/h2'
const cocktailName= '//div/div[last()]/h1'

Given('user has navigated to the home page', async function () {
    await page.goto(url)
    const locator = await page.locator(home)
    await expect(locator).toBeVisible()
});

When('the user searches for cocktail {string}', async function (cocktail) {
    await page.fill(name, cocktail)
});

Then('the result should be empty', async function () {
    const locator = await page.locator(notMatched)
    await expect(locator).toBeVisible() 
});

Then('the user should see the details of cocktail {string}', async function (cocktail) {
    const locator = await page.locator(cocktailName)
    await expect(locator).toHaveText(cocktail, {ignoreCase: true})
});