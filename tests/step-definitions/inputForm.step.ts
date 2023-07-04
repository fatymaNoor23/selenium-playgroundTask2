const { Given, When, Then } = require('@wdio/cucumber-framework');
import { clickInputForm } from "../../main/pages/homepage/tasks/homepage.tasks";
import { closeSession, fillOutForm } from "../../main/pages/inputFormPage/actions/inputform.actions";
import { verifyConfirmationMessage, verifyConfirmationURL } from "../../main/pages/inputFormPage/assertions/inputform.assertions";
import { clickSubmitButton } from "../../main/pages/inputFormPage/tasks/inputform.tasks";


Given("user is on the Selenium Playground website", async()=>{
    await browser.url("https://www.lambdatest.com/selenium-playground/")
})
When("user click on Input Form Submit", async()=>{
    await clickInputForm();
})
Then("user fill in all the fields", async()=>{
    await fillOutForm();
})
When("user click on the submit button", async()=>{
    await clickSubmitButton();
})
Then("user should see the form submitted successfully and see the message", async()=>{
    await verifyConfirmationURL();
    await verifyConfirmationMessage();
})


