const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");

const url = "http://localhost:8080/";
const detailsButtonSelector = 'a[href="/cocktail/13501"]';

Given("user has navigated to home page", async function () {
  await page.goto(url);
  expect(page.url()).toBe("http://localhost:8080/");
});

When(
  "the user views details of cocktail {string}",
  async function (cocktailName) {
    await page.click(detailsButtonSelector);
  }
);

Then("the result should match the following data", async function (dataTable) {
  // Extracting data from the webpage
  const cocktailName = await page.innerText(
    "//div[contains(@class,'space-y-4')]/div[1]/h2"
  );
  const category = await page.innerText(
    "//div[contains(@class,'space-y-4')]/div[2]/h2"
  );
  const info = await page.innerText(
    "//div[contains(@class,'space-y-4')]/div[3]/h2"
  );
  const glass = await page.innerText(
    "//div[contains(@class,'space-y-4')]/div[4]/h2"
  );
  const instructions = await page.innerText(
    "//div[contains(@class,'space-y-4')]/div[5]/h2"
  );
  const ingredients = await page.innerText(
    "//div[contains(@class,'space-y-4')]/div[6]/h2"
  );

  //  Extracting expected values from the dataTable
  const expectedData = dataTable.hashes();

  //  //  Asserting the retrieved data with the expected values
  expect(cocktailName).toEqual(expectedData[0].Name);
  expect(category).toEqual(expectedData[0].Category);
  expect(info).toEqual(expectedData[0].Info);
  expect(glass).toEqual(expectedData[0].Glass);
  expect(instructions).toEqual(expectedData[0].Intructions);
  expect(ingredients).toEqual(expectedData[0].Ingredients);
});
