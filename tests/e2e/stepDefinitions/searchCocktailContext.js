const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");
const { SearchPage } = require("../../pageObjects/searchPage");

const searchPage = new SearchPage();

//First Scenario
When(
  "the user searches for a cocktail {string}",
  async function (cocktailName) {
    await searchPage.searchCocktail(cocktailName);
  }
);

Then("the user should see cocktail {string}", async function (cocktailName) {
  await searchPage.resultFound();
});

//Scenario Outline
When(
  "the user tries to search for a cocktail {string}",
  async function (cocktailName) {
    await searchPage.searchCocktail(cocktailName);
  }
);

Then("the result should be empty", async function () {
  await searchPage.resultNotFound();
});
