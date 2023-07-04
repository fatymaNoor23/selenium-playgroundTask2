import { submitButton } from "../user-interface/inputform.ui";
export async function clickSubmitButton(){
    const submit=submitButton;
    await submit.click();
}