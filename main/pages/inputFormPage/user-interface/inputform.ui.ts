export const name=$(`//div/input[contains(@id,"name") and contains(@placeholder,"Name")]`)
export const password=$(`//div/input[contains(@id,"inputPassword4")]`)
export const email=$(`//div/input[contains(@id,"inputEmail4") and contains(@placeholder,"Email")]`)
export const company=$(`//div/input[contains(@id,"company") and contains(@placeholder,"Company")]`)
export const website=$(`//div/input[contains(@id,"websitename") and contains(@placeholder,"Website")]`)
export const country=$(`//div/label/following::select[contains(@name,"country")]`)
export const city=$(`//div/input[contains(@id,"inputCity")]`)
export const address1=$(`//div/input[contains(@id,"inputAddress1")]`)
export const address2=$(`//div/input[contains(@id,"inputAddress2")]`)
export const state=$(`//div/input[contains(@id,"inputState")]`)
export const zipCode=$(`//div/input[contains(@id,"inputZip")]`)
export const submitButton=$(`//div[contains(@class,"text-right mt-20")]/button[contains(@type,"submit")]`)
export const message=$(`//div/form[contains(@id,"seleniumform")]/following::p[contains(@class,"success-msg hidden")]`);



