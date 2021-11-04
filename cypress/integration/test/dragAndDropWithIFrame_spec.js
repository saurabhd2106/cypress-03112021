/// <reference types="cypress" />

describe ("Drag and Drop", function() {

    beforeEach(()=>{
        cy.visit("https://jqueryui.com/droppable/")
    })

    it("Verify Search Product Test", function() {


        //Get the frame firt
        cy.get(".demo-frame").then($frame => {

            const body = $frame.contents().find("body")

            cy.wrap(body).find("#draggable").as("draggable")

            cy.wrap(body).find("#droppable").as("droppable")
        })
      
  

        cy.get("@draggable").trigger("mousedown", {which: 1})

        cy.get("@droppable").trigger("mousemove").trigger("mouseup", {force: true})

        cy.get("@droppable").invoke("text").should("contain", "Dropped!")

    })
})