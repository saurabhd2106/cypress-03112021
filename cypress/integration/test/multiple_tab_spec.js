/// <reference types="cypress" />

describe("Multiple Tab Handling", () => {

    it("Multiple Tab handling", () => {


        cy.visit("https://test.qatechhub.com/window-handling/");

        cy.contains("Click Here").then(clickHereButton => {

            cy.wrap(clickHereButton).should("have.attr", "href").and("equal", "https://qatechhub.com")

            cy.wrap(clickHereButton).should("have.attr", "target").and("equal", "_blank")
        })

        cy.contains("Click Here").as("clickHereLink")
        cy.get("@clickHereLink").invoke("attr", "href").should("equal", "https://qatechhub.com")

        cy.get("@clickHereLink").invoke("attr", "target").should("equal", "_blank")

        cy.get("@clickHereLink").invoke("removeAttr", "target").click()

        cy.go('back')
    })

    

})