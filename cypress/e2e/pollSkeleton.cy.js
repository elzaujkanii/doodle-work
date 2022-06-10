/// <reference  types="cypress"  />

import CreateAPoll from "./pageObject/pages.cy.js"

const closeCookies = new CreateAPoll();
const creatingPoll = new CreateAPoll();
const typingName = new CreateAPoll();
const email = new CreateAPoll();
const title = new CreateAPoll();
const desc = new CreateAPoll();
const country = new CreateAPoll();
const selectedCountry = new CreateAPoll();
const date = new CreateAPoll();
const submitForm = new CreateAPoll();
const timeSlot = new CreateAPoll();
const submitButton = new CreateAPoll();

describe("Create New Poll", function () {
    it("Go to homepage and close cookies", function () {
        closeCookies.navigate();
        closeCookies.closeCookies();
    });

    it("Create a new poll", function(){
        creatingPoll.newPoll();
    });

    it("Type your name", function(){
        typingName.typeName();
    });
    
    it("Write Email", function(){
        email.typeEmail();
    });

    it("Write Something", function(){
        title.typeTitle();
    });

    it("Write a description", function(){
        desc.typeDesc();
    });

    it("Choose a country", function(){
        country.location();
    });

    it("Select this country", function(){
        selectedCountry.selectCountry();
    });

    it("Click the date", function(){
        date.dateButton();
    });

    it("Choose a time slot", function(){
        timeSlot.chooseSectionDate();
    });

    it("Submit the Form", function(){
        submitButton.submitButton();
    });
}); 



afterEach(() => {
    //Code to Handle the Sesssions in cypress.
    //Keep the Session alive when you jump to another test
    let str = [];
    cy.getCookies().then((cook) => {
        cy.log(cook);
        for (let l = 0; l < cook.length; l++) {
            if (cook.length > 0 && l == 0) {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            } else if (cook.length > 1 && l > 1) {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            }
        }
    })
})