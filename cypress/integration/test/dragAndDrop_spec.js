/// <reference types="cypress" />

describe ("Drag and Drop", function() {

    beforeEach(()=>{
        cy.visit("https://test.qatechhub.com/drag-and-drop/")
    })

    it("Verify Search Product Test", function() {
      
        cy.get("#draggable").as("draggable")

        cy.get("#droppable").as("droppable")

        cy.get("@draggable").trigger("mousedown", {which: 1})

        cy.get("@droppable").trigger("mousemove").trigger("mouseup", {force: true})

        cy.get("@droppable").invoke("text").should("contain", "Dropped!")

    })
})