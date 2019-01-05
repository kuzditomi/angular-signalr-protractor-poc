Feature: Signalr connection

    Background:
        Given I go to "http://localhost:4500/"

    Scenario: Basic page load
        Then I should see the title "Example app"

    Scenario: Signalr connection after page load
        When I check the logs
        Then I should see signalr is connected

    Scenario: Signalr message exchange
        When Signalr is connected
        And I ping the hub
        Then the push from hub arrives