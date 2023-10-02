import { slowCypressDown } from "cypress-slow-down"

slowCypressDown() // Cypress Executes the tests in a very fast way, this method helps us to slow down the execution and 
//  to better appreciate the log in the process.

describe('Test Automation For Zoe Page',()=>
{

  beforeEach('Visit the website ',()=>{    //This is a 'hook' and in this case runs the visit to the url before running any of our tests.
    cy.visit("https://www.demoblaze.com/"); 

})
   

    it.only('TC#1 - Signup Process ', () => //This is for testing the Signup
    {
        
        cy.get('#signin2').click();
        cy.get('#sign-username').type('Manuel19')
        cy.get('#sign-password').type('0120120508')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })

    it.only('TC#2 - Login Process ', () => //This is for testing the login 
    {
     
        cy.get('#login2',{timeout: 4000}).click();
        cy.get('#loginusername').type('Manuel19')
        cy.get('#loginpassword').type('0120120508')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('#nameofuser').should('contain.text','Welcome Manuel19')
        
        
    })

    it.only('TC#3 - Purchase Process ', () => //This is for testing the login 
    {
     
        cy.get('#login2',{timeout: 4000}).click();
        cy.get('#loginusername').type('Manuel19')
        cy.get('#loginpassword').type('0120120508')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.get('#nameofuser').should('contain.text','Welcome Manuel19')

        //This is for the purchase process : 

        cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click() //This is the product selected
        cy.get('.col-sm-12 > .btn').click() // Here we add the product to our cart
        cy.get('#cartur').click() // We go to the cart page 
        cy.get('.col-lg-1 > .btn').click() // Click on place order

        //Here we have to add our data for the purchase : 

        cy.get('#name').type('Manuel')
        cy.get('#country').type('colombia')
        cy.get('#city').type('bogota')
        cy.get('#card').type('2332-4343=5332')
        cy.get('#month').type('September')
        cy.get('#year').type('2023')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').should('contain.text','Thank you for your purchase!')
        cy.get('.confirm').click()
        
        
    })

 
         
})




