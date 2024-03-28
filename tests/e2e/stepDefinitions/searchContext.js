const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { HomePage } = require("../pageObjects/homePage");

const nameSelector = "#name";
const notMatchedSelector = "div>h2";
const cocktailNameSelector = "//div/div[last()]/h1";

const homePage = new HomePage();

Given("the user has navigated to the home page", async () => {
  const locator = await homePage.navigateToHomePage();
  await expect(locator).toBeVisible();
});

When("the user searches for cocktail {string}", async (cocktail) => {
  await page.fill(nameSelector, cocktail);
});

Then("the result should be empty", async () => {
  const locator = await page.locator(notMatchedSelector);
  await locator.waitFor();
  await expect(locator).toBeVisible();
});

Then("the user should see the details of cocktail {string}", async function (cocktail) {
  const locator = await page.locator(cocktailNameSelector);
  await locator.waitFor();
  await expect(locator).toHaveText(cocktail, { ignoreCase: true });
});