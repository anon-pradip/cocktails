const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const url = "http://localhost:8080/";
const home = '//nav/div[1]/a[@href="/"]';
const name = "#name";
const notMatched = "//div/h2";
const cocktailName = "//div/div[last()]/h1";

Given("user {string} has navigated to the home page", async function (admin) {
  await page.goto(url);
  const locator = await page.locator(home);
  await expect(locator).toBeVisible();
});

When("user {string} searches for cocktail {string}", async function (admin, cocktail) {
  await page.fill(name, cocktail);
});

Then("the result should be empty", async function () {
  const locator = await page.locator(notMatched);
  await expect(locator).toBeVisible();
});

Then("user {string} should see the details of cocktail {string}", async function (admin, cocktail) {
    const locator = await page.locator(cocktailName);
    await expect(locator).toHaveText(cocktail, { ignoreCase: true });
});