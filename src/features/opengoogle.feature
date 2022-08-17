Feature:  Open Google

    Scenario: Open Google
        Given a user opens "https://www.google.com"
        When url is string
        Then open url in browser