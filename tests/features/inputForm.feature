Feature: Submitting a Form on Selenium Playground
Scenario: Submitting a form on Selenium Playground

Given user is on the Selenium Playground website
When user click on Input Form Submit
Then user fill in all the fields
When user click on the submit button
Then user should see the form submitted successfully and see the message
