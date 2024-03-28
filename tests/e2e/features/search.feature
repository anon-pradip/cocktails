Feature: Search
    As a user
    I want to find details of my favorite drink
    So that I can make

    Background:
        Given user "admin" has navigated to the home page


    Scenario: try to search for a cocktail
        When user "admin" searches for cocktail "abcdef"
        Then the result should be empty


    Scenario Outline: search a cocktail
        When user "admin" searches for cocktail "<cocktail>"
        Then user "admin" should see the details of cocktail "<cocktail>"
        Examples:
            | cocktail |
            | boxcar   |
            | radler   |