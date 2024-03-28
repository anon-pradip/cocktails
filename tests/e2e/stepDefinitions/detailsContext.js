const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const DetailsPage = require("../pageObjects/detailsPage");

const detailsSelector = '//a[@href="/cocktail/17253"]';

const detailsPage = new DetailsPage();

When("the user navigates to details page of a cocktail {string}", async (cocktail) => {
  await page.click(detailsSelector);
});

Then("the user should see the details of the cocktail", async (dataTable) => {
  const titles = await detailsPage.getText()
  const expectedData = dataTable.hashes();
  expect(titles[0]).toEqual(expectedData[0].Name);
  expect(titles[1]).toEqual(expectedData[0].Category);
  expect(titles[2]).toEqual(expectedData[0].Info);
  expect(titles[3]).toEqual(expectedData[0].Glass);
  expect(titles[4]).toEqual(expectedData[0].Intructions);
  expect(titles[5]).toEqual(expectedData[0].Ingredients);
});
