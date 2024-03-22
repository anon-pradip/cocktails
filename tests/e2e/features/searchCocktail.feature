Feature: searching for cocktails
    As a user
    I want to search for Cocktails on the website
    So that I can find what I'm looking for easily

    Background: 
        Given user has navigated to home page


    Scenario: user searches for a cocktail
        When the user searches for a cocktail 'mojito'
        Then the user should see cocktail 'mojito'


    Scenario Outline: trying to search for a cocktail
        When the user tries to search for a cocktail '<name>'
        Then the result should be empty
        Examples:
            | name   | 
            | Real   |
            | Gorkha |