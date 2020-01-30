describe('Texboxes with max characters', () => {
    it('displays the appropiate remaining characters count - counter 1', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="first-name-chars-left-count"]')
            .as('charsLeftSpan');

        cy.get('[data-cy="input-first-name"]')
            .as('firstInput')

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '15');

        cy.get('@firstInput')
            .type('12345');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10');

        cy.get('@firstInput')
            .type('hello my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0');
    });
    it('Prevents the user from typing for characters once max is exceeded - counter 1', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-first-name"]')
            .as('charsLeftSpan');



        cy.get('@charsLeftSpan')
            .type('123456789123456789');

        cy.get('[data-cy="input-first-name"]')
            .should('have.attr', 'value', '123456789123456');
    });

});