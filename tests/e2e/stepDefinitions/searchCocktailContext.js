const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");

//home url
const url = "http://localhost:8080/";

//css selectors
const name = "input#name";
const resultFound = "div.flex.flex-wrap";
const resultNotFound = "h2.text-3xl";

//First Scenario
When(
  "the user searches for a cocktail {string}",
  async function (cocktailName) {
    await page.fill(name, cocktailName);
  }
);

Then("the user should see cocktail {string}", async function (cocktailName) {
  const locator = await page.$(resultFound);
  expect(locator).toBeVisible();
});

//Scenario Outline
When(
  "the user tries to search for a cocktail {string}",
  async function (cocktailName) {
    await page.fill(name, cocktailName);
  }
);

Then("the result should be empty", async function () {
  const locator = await page.$(resultNotFound);
  expect(locator).toBeVisible();
});
