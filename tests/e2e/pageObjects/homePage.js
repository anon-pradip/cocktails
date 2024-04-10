require('dotenv').config();

class HomePage {
  constructor() {
    this.url = process.env.URL? process.env.URL : "http://localhost:8080/";
    this.homeSelector = '//nav/div[1]/a[@href="/"]';
  }

  navigateToHomePage = async () => {
    await page.goto(this.url);
    const locate = await page.locator(this.homeSelector);
    return locate;
  };
}

module.exports = { HomePage };
