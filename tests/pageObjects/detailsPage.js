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
  }

  async navigateToDetailsPage() {
    await page.click(this.detailsButtonSelector);
  }

  async extractDataFromPage() {
    // Extracting data from the webpage
    const cocktailName = await page.innerText(this.cocktailNameSelector);
    const category = await page.innerText(this.categorySelector);
    const info = await page.innerText(this.infoSelector);
    const glass = await page.innerText(this.glassSelector);
    const instructions = await page.innerText(this.instructionsSelector);
    const ingredients = await page.innerText(this.ingredientsSelector);

    return {
      cocktailName,
      category,
      info,
      glass,
      instructions,
      ingredients
    };
  }
}
module.exports = { DetailsPage };
