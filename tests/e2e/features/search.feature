Feature: Search
    As a user
    I want to find details of my favorite drink
    So that I can make

    Background:
        Given the user has navigated to the home page


    Scenario: try to search for a cocktail
        When the user searches for cocktail "abcdef"
        Then the result should be empty


    Scenario Outline: search a cocktail
        When the user searches for cocktail "<cocktail>"
        Then the user should see the details of cocktail "<cocktail>"
        Examples:
            | cocktail |
            | boxcar   |
            | radler   |