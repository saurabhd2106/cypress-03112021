/// <reference types="cypress" />

describe ("Alert Handling", function() {

    beforeEach(()=>{
        cy.visit("https://test.qatechhub.com/alert-handling/")
    })

    it("Handle Normal Alert", function() {
      
        cy.get("#NormalAlert").click()

        cy.on("window:alert", (str) => {

            expect(str).to.equal("Hello! I am an alert box!")
        })

        cy.get("#CustomAlert").click()

        cy.on("window:confirm", (str)=> {
            return false
        })
       
    })
})