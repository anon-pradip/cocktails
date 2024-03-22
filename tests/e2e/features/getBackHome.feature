Feature: navigation to Home Page
    As a user
    I want to navigate back to home page from a details page
    So that I can return to the main page easily


    Scenario: navigation to home page
        Given user is on the details page of a cocktail
        When the user returns to home page
        Then the user should be redirected to the home page