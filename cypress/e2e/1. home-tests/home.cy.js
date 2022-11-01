/// <reference types="cypress" />

describe('Carbon Footprint Calculator home', () => {

    const peopleInput = '#ppl-in-household-input';
    const zipcodeInput = '#zip-code-input';
    const getstartedButton = '#get-started';
    const invalidNumber = '#invalidNum';
    const invalidZipcode = '#invalidZipNum';
    const zipcodeNotFound = '#invalidZip';
    const useDefaultZipcode = '.default-zip';

    before(() => {
      cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    })
  
    it('should return error message when empty number of people in household', () => {
        cy.get(zipcodeInput)
            .type(93101);
      
        cy.get(getstartedButton)
            .click();
  
        cy.get(invalidNumber)
            .should('have.text', 'Please enter a valid number of people.');
    });
  
    it('should return error message when empty zip code', () => {
        cy.get(peopleInput)
            .type(3);
        
        cy.get(getstartedButton)
            .click();
    
        cy.get(invalidZipcode)
            .should('have.text', 'Please enter a valid five-digit ZIP Code.');
    });
  
    it('should return error message when number of people and zip code are both empty', () => {
        cy.get(getstartedButton)
            .click();
    
        cy.get(invalidNumber)
            .should('have.text', 'Please enter a valid number of people.');
        
        cy.get(invalidZipcode)
            .should('have.text', 'Please enter a valid five-digit ZIP Code.');
    });

    it('should return error message when type invalid zip code', () => {
        cy.get(peopleInput)
            .type(3);

        cy.get(zipcodeInput)
            .type(9310);
        
        cy.get(getstartedButton)
            .click();
    
        cy.get(invalidZipcode)
            .should('have.text', 'Please enter a valid five-digit ZIP Code.');

        cy.reload();
    });

    it('should return error message when a zip code is not found', () => {
        cy.get(peopleInput)
            .type(3);

        cy.get(zipcodeInput)
            .type('00000');
        
        cy.get(getstartedButton)
            .click();
    
        cy.get(zipcodeNotFound)
            .should('have.text', 'We could not find your ZIP code in our database. Please try again, or you may continue using the calculator with a default value. Using the default will give you average estimates.\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t  I will use the default ZIP code.\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t');
        
        cy.get(useDefaultZipcode).should('be.visible');
    });
  })
  