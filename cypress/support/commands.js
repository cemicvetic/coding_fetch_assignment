Cypress.Commands.add('enterBowls', (leftValues, rightValues) => {
    leftValues.forEach((value, index) => {
        cy.get(`#left_${index}`).type(`${value}`, { timeout: 10000 })
            .should('have.value', value);
    });
    rightValues.forEach((value, index) => {
        cy.get(`#right_${index}`).type(`${value}`, { timeout: 10000 })
            .should('have.value', value);
    });
});

Cypress.Commands.add('clickWeigh', () => {
    cy.get('#weigh').click();
});

Cypress.Commands.add('resetBowls', () => {
    cy.get(':nth-child(4) > #reset').click();
});

Cypress.Commands.add('getWeighingResult', (nthResult) => {
    cy.log(`Getting result for nth-child(${nthResult})`);
    cy.get('ol')
        .find(`li:nth-child(${nthResult})`)
        .invoke('text');
});

Cypress.Commands.add('getResultOperator', () => {
    cy.get('.result > button').invoke('text');
});

Cypress.Commands.add('clickFakeGoldenBar', (fakeGoldenBar) => {
    cy.get(fakeGoldenBar).should('exist').click();
});





// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//git remote add origin https://github.com/cemicvetic/Fetch_challenge.git
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })