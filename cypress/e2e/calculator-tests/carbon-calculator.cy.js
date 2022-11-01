/// <reference types="cypress" />

describe('Carbon Footprint Calculator and Report for TWO Household based on U.S average', () => {
    const peopleInput = '#ppl-in-household-input';
    const zipcodeInput = '#zip-code-input';
    const getstartedButton = '#get-started';
    const section = '.sectionName';
    const heating = '#primaryHeatingSource';
    const currentTotalEmissions = ':nth-child(4) > .totalEmissions';
    const totalAfterPlannedActions = ':nth-child(5) > .newEmissionTotal';
    const usAverageEmissions = ':nth-child(6) > .uS_avg'; 
    const transportationButton = '#to-transportation';
    
    before(() => {
      cy.visit('https://www3.epa.gov/carbon-footprint-calculator/')
    })
  
    it('should start calculation for TWO household', () => {
        cy.get(peopleInput)
            .type(3);

        cy.get(zipcodeInput)
            .type(93101);
      
        cy.get(getstartedButton)
            .click();

        cy.get(section)
            .should('be.visible');
    });
  
    it('should select primary heating type and calculate the average current emissions from home energy for natural gas', () => {
        const utilityNaturalGas = '#naturalGasTextInput';
        const naturalGasTotal = '.naturalGas > .inner-container > .green-lb-total';
        
        cy.get(heating)
            .select('Electricity');
        
        cy.get(utilityNaturalGas)
            .type(46);
    
        cy.get(naturalGasTotal)
            .should('have.text', '6,181 lbs.');

        cy.get(currentTotalEmissions)
            .should('have.text', '6,181');

        cy.get(totalAfterPlannedActions)
            .should('have.text', '6,181');

        cy.get(usAverageEmissions)
            .should('have.text', '9,213');
    });

    it('should add for natural gas the annual current total emissions, the total after planned actions and the us average', () => {
        cy.get(currentTotalEmissions)
            .should('have.text', '6,181');

        cy.get(totalAfterPlannedActions)
            .should('have.text', '6,181');

        cy.get(usAverageEmissions)
            .should('have.text', '9,213');
    });

    it('should calculate the average current emissions from home energy for electricity', () => {
        const utilityElectricity = '#electricityTextInput';
        const electricityTotal = '.electricity > .inner-container > .green-lb-total';
            
        cy.get(utilityElectricity)
            .type(88);
        
        cy.get(electricityTotal)
            .should('have.text', '5,451 lbs.');    
    });

    it('should add for natural gas and electricity the annual current total emissions, the total after planned actions and the us average', () => {
        cy.get(currentTotalEmissions)
            .should('have.text', '11,632');
    
        cy.get(totalAfterPlannedActions)
            .should('have.text', '11,632');
    
        cy.get(usAverageEmissions)
            .should('have.text', '25,578');
    });

    it('should calculate the average current emissions from home energy for fuel oil', () => {
        const utilityFuelOil = '#fuelTextInput';
        const fuelTotal = '.fuel > .inner-container > .green-lb-total';
            
        cy.get(utilityFuelOil)
            .type(144);
        
        cy.get(fuelTotal)
            .should('have.text', '9,719 lbs.');
    });

    it('should add for natural gas, electricity and fuel the annual current total emissions, the total after planned actions and the us average', () => {
        cy.get(currentTotalEmissions)
            .should('have.text', '21,351');
    
        cy.get(totalAfterPlannedActions)
            .should('have.text', '21,351');
    
        cy.get(usAverageEmissions)
            .should('have.text', '40,122');
    });

    it('should calculate the average current emissions from home energy for propane', () => {
        const utilityPropane = '#propaneTextInput';
        const propaneTotal = '.propane > .inner-container > .green-lb-total';
            
        cy.get(utilityPropane)
            .type(74);
        
        cy.get(propaneTotal)
            .should('have.text', '4,469 lbs.');
    });

    it('should add for natural gas, electricity, fuel and propane the annual current total emissions, the total after planned actions and the us average', () => {
        cy.get(currentTotalEmissions)
            .should('have.text', '25,820');
    
        cy.get(totalAfterPlannedActions)
            .should('have.text', '25,820');
    
        cy.get(usAverageEmissions)
            .should('have.text', '46,851');
    });

    it('should calculate the reduce of emissions by turning up/down heating', () => {
        const upHeatingSummer = '#energyAC';
        const downHeatingWinter = '#energyHeat';
        const acEstimatedAnnualSavedDollars = '.bold > .ac-energy-dollars-saved';
        const acEstimatedAnnualSavedEmissions = '.bold > .ac-energy-co2-saved';
        const heatEstimatedAnnualSavedDollars = '.bold > .heat-energy-dollars-saved';
        const heatEstimatedAnnualSavedEmissions = '.bold > .heat-energy-co2-saved';
            
        cy.get(upHeatingSummer)
            .type(72);
        
        cy.get(acEstimatedAnnualSavedDollars)
            .should('have.text', '639');

        cy.get(acEstimatedAnnualSavedEmissions)
            .should('have.text', '3,297');
        
        cy.get(downHeatingWinter)
            .type(60);

        cy.get(heatEstimatedAnnualSavedDollars)
            .should('have.text', '171');

        cy.get(heatEstimatedAnnualSavedEmissions)
            .should('have.text', '883');

        cy.get(totalAfterPlannedActions)
            .should('have.text', '21,639');
    });

    it('should go to transportation section', () => {
        cy.get(transportationButton)
            .click();

        cy.get(section)
            .should('have.text', 'Transportation');
    });

  })
  