Feature: navigation to Home Page
    As a user
    I want to see all the drinks available in home page
    So that I can choose one to drink


    Scenario: navigation from details page to home page
        Given user is on the details page of a cocktail
        When the user returns to home page
        Then the user should be redirected to the home page