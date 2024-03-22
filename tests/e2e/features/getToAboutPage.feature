Feature: navigation from home page to about page
    As a user
    I want to navigate to about page from home page
    So that I can read the about page

    Scenario: navigation to about page
        Given user is on the home page of the website
        When the user navigates to about page
        Then the user should be redirected to the about page