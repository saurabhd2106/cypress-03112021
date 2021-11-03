/// <reference types="cypress" />

describe("Learning Form Elements", () => {

    it("Form Fill with valid details", () => {


        cy.visit("https://test.qatechhub.com/form-elements/");

        cy.get('#wpforms-49-field_1').type("Saurabh");
    
        cy.get('#wpforms-49-field_1-last').type("Dhingra");
    
        cy.get("#wpforms-49-field_2").type("saurabh@qatechhub.com");
    
        cy.get('#wpforms-49-field_4').type("9560666952");
    
        cy.get('input[@value="Male"]').check()
    
        cy.get("#wpforms-49-field_5").select("Cypress");
    
        cy.get("#wpforms-submit-49").click();
    
        cy.get("#wpforms-confirmation-49").should("text", "")
    })

    it("Form Fill with invalid details", () => {

        cy.visit("https://test.qatechhub.com/form-elements/")
    })

})