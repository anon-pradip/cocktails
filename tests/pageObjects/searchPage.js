const { expect } = require("@playwright/test");

class SearchPage {
  constructor() {
    this.homeUrl = "http://localhost:8080/";
    this.name = "input#name";
    this.resultFoundSelector = "div.flex.flex-wrap";
    this.resultNotFoundSelector = "h2.text-3xl";
  }

  async searchCocktail(cocktailName) {
    await page.fill(this.name, cocktailName);
  }

  async resultFound() {
    const locator = await page.waitForSelector(this.resultFoundSelector);
    expect(locator).toBeVisible();
  }

  async resultNotFound() {
    const locator = await page.waitForSelector(this.resultNotFoundSelector);
    expect(locator).toBeVisible();
  }
}
module.exports = { SearchPage };
