import { Given } from "@cucumber/cucumber";

Given('a user opens {string}' , (url) => {
    console.log(url)  
});