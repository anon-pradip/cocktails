const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");
const { DetailsPage } = require("../../pageObjects/detailsPage");

const detailsPage = new DetailsPage();

Given("the user has navigated to home page", async function () {
  await detailsPage.navigateToHomePage();
  expect(page.url()).toBe("http://localhost:8080/");
});

When(
  "the user views details of cocktail {string}",
  async function (cocktailName) {
    await detailsPage.navigateToDetailsPage();
  }
);

Then("the result should match the following data", async function (dataTable) {
  const extractedData = await detailsPage.extractDataFromPage();
  const expectedData = dataTable.hashes();

  // Asserting the retrieved data with the expected values
  expect(extractedData.cocktailName).toEqual(expectedData[0].Name);
  expect(extractedData.category).toEqual(expectedData[0].Category);
  expect(extractedData.info).toEqual(expectedData[0].Info);
  expect(extractedData.glass).toEqual(expectedData[0].Glass);
  expect(extractedData.instructions).toEqual(expectedData[0].Intructions);
  expect(extractedData.ingredients).toEqual(expectedData[0].Ingredients);
});
