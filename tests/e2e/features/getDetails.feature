Feature: cocktail details
    As a user
    I want to get details of a particular cocktail on the website
    So that I can know what I'm going to drink easily


    Scenario: retrieve details of a cocktail
        Given user has navigated to home page
        When the user views details of cocktail 'ABC'
        Then the result should match the following data
            | Name | Category | Info      | Glass      | Intructions              | Ingredients                            |
            | ABC  | Shot     | Alcoholic | Shot glass | Layered in a shot glass. | Amaretto, Baileys irish cream, Cognac, |