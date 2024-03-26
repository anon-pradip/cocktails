const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

//home url
const url = "http://localhost:8080/"

//css selectors
const name = "input#name"
const resultFound = "div.flex.flex-wrap.justify-center.items-center"
const resultNotFound = "h2.text-center.text-3xl.mt-36"

  Given('user has navigated to the home page', async function () {
    await page.goto(url)
    expect(page.url()).toBe('http://localhost:8080/');
  });
  

  //First Scenario
  When('the user searches for a cocktail {string}', async function (cocktailName) {
    await page.fill(name, cocktailName)
  });


  Then('the user should see cocktail {string}', async function (cocktailName) {
    const locator = await page.locator(resultFound)
    expect(locator).toBeVisible()
  });


  //Scenario Outline
  When('the user tries to search for a cocktail {string}',async function (cocktailName) {
    await page.fill(name, cocktailName)
  });

  Then('the result should be empty',async function () {
    const locator = await page.locator(resultNotFound)
    expect(locator).toBeVisible()
  });