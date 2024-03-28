const { When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

const details = '//a[@href="/cocktail/17253"]';

When("user {string} navigates to details page of a cocktail {string}", async function (admin, cocktail) {
    await page.click(details);
});

Then("user {string} should see the details of the cocktail", async function (admin, dataTable) {
  const cocktailName= await page.innerText('//div[1]/h2[contains(@class, "font-semibold")]')
  const category= await page.innerText('//div[2]/h2[contains(@class, "font-semibold")]')
  const info= await page.innerText('//div[3]/h2[contains(@class, "font-semibold")]')
  const glass= await page.innerText('//div[4]/h2[contains(@class, "font-semibold")]')
  const instructions= await page.innerText('//div[5]/h2[contains(@class, "font-semibold")]')
  const ingredients= await page.innerText('//div[6]/h2[contains(@class, "font-semibold")]')

  const expectedData = dataTable.hashes();

  expect(cocktailName).toEqual(expectedData[0].Name);
  expect(category).toEqual(expectedData[0].Category);
  expect(info).toEqual(expectedData[0].Info);
  expect(glass).toEqual(expectedData[0].Glass);
  expect(instructions).toEqual(expectedData[0].Intructions);
  expect(ingredients).toEqual(expectedData[0].Ingredients);
});