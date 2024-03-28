const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");
const { DetailsPage } = require("../../pageObjects/detailsPage");

const detailsPage = new DetailsPage();

Given("the user has navigated to home page", async function () {
  await detailsPage.navigateToHomePage();
});

When(
  "the user views details of cocktail {string}",
  async function (cocktailName) {
    await detailsPage.navigateToDetailsPage();
  }
);

Then("the result should match the following data", async function (dataTable) {
  await detailsPage.compareData(dataTable);
});
