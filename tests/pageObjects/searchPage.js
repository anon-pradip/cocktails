const { expect } = require("@playwright/test");

class SearchPage {
  constructor() {
    this.name = "input#name";
    this.resultFoundSelector = "div.flex.flex-wrap";
    this.resultNotFoundSelector = "h2.text-3xl";
  }

  async navigateToHomePage() {
    const logoutBtnLocator = await page.locator(this.logoutBtnSelector);
    await expect(logoutBtnLocator).toBeVisible();
    await expect(page.locator(this.greetingSelector)).toContainText("Hello, ");
  }

  async logout() {
    await page.click(this.logoutBtnSelector);
  }
}
module.exports = { SearchPage };
