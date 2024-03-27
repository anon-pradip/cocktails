const {
  Given,
  When,
  Then
} = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given('user is on the details page of a cocktail {string}', async function (cocktail) {
  await page.goto("http://localhost:8081/cocktail/17222")
  await expect(page.url()).toBe("http://localhost:8081/cocktail/17222")
  const locator =await page.locator("//h2[@class='text-center text-xl font-bold tracking-widest'][text()='A1']")
  await expect(locator).toBeVisible()
});

When('the user returns to home page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the user should be redirected to the home page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});