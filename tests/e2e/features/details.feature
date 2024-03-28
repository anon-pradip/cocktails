Feature: Get cocktail details
    As a user
    I want to see the details of cocktail
    So that I can know its overall information


    Scenario: details are loaded
        Given the user has navigated to the home page
        When the user navigates to details page of a cocktail "Paloma"
        Then the user should see the details of the cocktail
            | Name   | Category | Info      | Glass         | Intructions                       | Ingredients            |
            | Paloma | Cocktail | Alcoholic | Collins glass | Stir together and serve over ice. | Grape Soda, Tequila, , |