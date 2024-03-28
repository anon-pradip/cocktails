const { expect } = require("@playwright/test");

class DetailsPage {
  constructor() {
    this.homeUrl = "http://localhost:8080/";
    this.detailsButtonSelector = "a[href='/cocktail/13501']";

    this.cocktailNameSelector = "//div[contains(@class,'space-y-4')]/div[1]/h2";
    this.categorySelector = "//div[contains(@class,'space-y-4')]/div[2]/h2";
    this.infoSelector = "//div[contains(@class,'space-y-4')]/div[3]/h2";
    this.glassSelector = "//div[contains(@class,'space-y-4')]/div[4]/h2";
    this.instructionsSelector = "//div[contains(@class,'space-y-4')]/div[5]/h2";
    this.ingredientsSelector = "//div[contains(@class,'space-y-4')]/div[6]/h2";
  }

  async navigateToHomePage() {
    await page.goto(this.homeUrl);
    expect(page.url()).toBe("http://localhost:8080/");
  }

  async navigateToDetailsPage() {
    await page.click(this.detailsButtonSelector);
  }

  async compareData(dataTable) {
    // Extracting data from the webpage
    const cocktailName = await page.innerText(this.cocktailNameSelector);
    const category = await page.innerText(this.categorySelector);
    const info = await page.innerText(this.infoSelector);
    const glass = await page.innerText(this.glassSelector);
    const instructions = await page.innerText(this.instructionsSelector);
    const ingredients = await page.innerText(this.ingredientsSelector);

    const expectedData = dataTable.hashes();
    //  //  Asserting the retrieved data with the expected values
    expect(cocktailName).toEqual(expectedData[0].Name);
    expect(category).toEqual(expectedData[0].Category);
    expect(info).toEqual(expectedData[0].Info);
    expect(glass).toEqual(expectedData[0].Glass);
    expect(instructions).toEqual(expectedData[0].Intructions);
    expect(ingredients).toEqual(expectedData[0].Ingredients);
  }
}
module.exports = { DetailsPage };
