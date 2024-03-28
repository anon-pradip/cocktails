class DetailsPage {
  constructor() {
    this.cocktailNameSelector = '//div[1]/h2[contains(@class, "font-semibold")]';
    this.categorySelector = '//div[2]/h2[contains(@class, "font-semibold")]';
    this.infoNameSelector = '//div[3]/h2[contains(@class, "font-semibold")]';
    this.glassSelector = '//div[4]/h2[contains(@class, "font-semibold")]';
    this.instructionsSelector = '//div[5]/h2[contains(@class, "font-semibold")]';
    this.ingredientsSelector = '//div[6]/h2[contains(@class, "font-semibold")]';
  }

  getText = async () => {
    const cocktailName = await page.innerText(
        this.cocktailNameSelector
    );
    const category = await page.innerText(
      this.categorySelector
    );
    const info = await page.innerText(
      this.infoNameSelector
    );
    const glass = await page.innerText(
      this.glassSelector
    );
    const instructions = await page.innerText(
      this.instructionsSelector
    );
    const ingredients = await page.innerText(
      this.ingredientsSelector
    );

    return [cocktailName, category, info, glass, instructions, ingredients];
  };
}

module.exports = DetailsPage;
