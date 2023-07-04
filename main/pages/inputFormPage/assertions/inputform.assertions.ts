import { message } from "../user-interface/inputform.ui"


export async function  verifyConfirmationURL(){
    await expect(browser).toHaveUrlContaining("https://www.lambdatest.com/selenium-playground/input-form-demo")
}

export async function verifyConfirmationMessage(){
    const msg=await message.getText();
    console.log('mESSSSSSSSAGE',msg);
    await expect(msg).toHaveTextContaining("Thanks for contacting us, we will get back to you shortly.");
    // await browser.closeWindow();
  
}
