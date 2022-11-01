/// <reference types="cypress" />

describe('carbon footprint calculator home', () => {

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
  
    it('empty number of people in household', () => {
        cy.get(zipcodeInput)
            .type(93101);
      
        cy.get(getstartedButton)
            .click();
  
        cy.get(invalidNumber)
            .should('have.text', 'Please enter a valid number of people.');
    });
  
    it('empty zipcode', () => {
        cy.get(peopleInput)
            .type(3);
        
        cy.get(getstartedButton)
            .click();
    
        cy.get(invalidZipcode)
            .should('have.text', 'Please enter a valid five-digit ZIP Code.');
    });
  
    it('number of people and zipcode both empty', () => {
        cy.get(getstartedButton)
            .click();
    
        cy.get(invalidNumber)
            .should('have.text', 'Please enter a valid number of people.');
        
        cy.get(invalidZipcode)
            .should('have.text', 'Please enter a valid five-digit ZIP Code.');
    });

    it('invalid zipcode', () => {
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

    it('zipcode not found', () => {
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
  