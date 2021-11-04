/// <reference types="cypress" />

describe ("Verify search Product test cases", function() {

    beforeEach(()=>{
        cy.visit("https://amazon.in")
    })

    it("Verify Search Product Test", function() {
      
        //Search Product
        cy.get("#searchDropdownBox").scrollIntoView().select("Electronics", {force: true})

        cy.get("#twotabsearchtextbox").type("Apple Watch")

        cy.get("#nav-search-submit-button").click()

      
        cy.get('[data-component-type="s-search-result"]').as("products")

        cy.get("@products").eq(5).invoke("text").then(product =>{

            cy.log(product)

            expect(product).to.contains("Apple Watch")

        })

        
        cy.get('@products').each(($el, index, $list) => {

            cy.wrap($el).scrollIntoView()
           
            cy.log("Index : "+ index + " and the product is - " + $el.text())
          })

    })

    

    

})