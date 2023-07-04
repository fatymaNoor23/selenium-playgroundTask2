import { inputFormButton } from "../user-interface/homepage.uis";

export async function clickInputForm(){
    const btn=inputFormButton;
    await btn.click();
}