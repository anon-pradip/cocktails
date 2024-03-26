const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

const detailsUrl = "http://localhost:8080/cocktail/17222"
const backHomeButton = 'a[href="/"].bg-green-900'

  Given('user is on the details page of a cocktail',async function () {
    await page.goto(detailsUrl)
  });


  When('the user returns to home page',async function () {
    await page.click(backHomeButton)
  });


  Then('the user should be redirected to the home page', function () {
   expect(page.url()).toBe('http://localhost:8080/');
  });
