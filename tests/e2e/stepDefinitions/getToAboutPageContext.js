const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

const url = "http://localhost:8080/"
const aboutButtonSelector = 'div.space-x-4 a[href="/about"]'


    Given('user is on the home page of the website',async function () {
        await page.goto(url)
        expect(page.url()).toBe('http://localhost:8080/');
    })  

    When('the user navigates to about page',async function () {
        await page.click(aboutButtonSelector)
    }); 

    Then('the user should be redirected to the about page', async function () {
        await expect(page).toHaveURL(`${url}about`)
        // expect(page.url()).toBe('http://localhost:8080/about');
    });