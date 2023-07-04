import * as paths from "../user-interface/inputform.ui";

export async function fillOutForm(){
    const name=paths.name;
    const email=paths.email;
    const password=paths.password;
    const country=paths.country;
    const company=paths.company;
    const website=paths.website;
    const city=paths.city;
    const address1=paths.address1;
    const address2=paths.address2;
    const state=paths.state;
    const zip=paths.zipCode;
    await name.setValue("Fatima");
    await email.setValue("faty23@gmail.com");
    await password.setValue("abcd123")
    await company.setValue("Emumba")
    await website.setValue("https://www.emumba.com/")
    //country
    await country.click();
    await country.selectByVisibleText("Afghanistan")
    await city.setValue("Islamabad")
    await address1.setValue("xyz street 100s");
    await address2.setValue("abc street 14");
    await state.setValue("Afghanistan")
    await zip.setValue(12903)
    
    
    
}

export async function closeSession(){
    await browser.getUrl();
    await browser.closeWindow();
    
}