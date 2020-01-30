describe('Texboxes with max characters', () => {
    it('displays the appropiate remaining characters count - counter 1', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-first-name"]')
            .type('12345');

        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-first-name"]')
            .type('hello my friend');

        cy.get('[data-cy="first-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    });
    it('Prevents the user from typing for characters once max is exceeded - counter 1', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-first-name"]')
            .type('123456789123456789');

        cy.get('[data-cy="input-first-name"]')
            .should('have.attr', 'value', '123456789123456');
    });

    it('displays the appropiate remaining characters count - counter 2', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '15');

        cy.get('[data-cy="input-last-name"]')
            .type('12345');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '10');

        cy.get('[data-cy="input-last-name"]')
            .type('hello my friend');

        cy.get('[data-cy="last-name-chars-left-count"]')
            .invoke('text')
            .should('equal', '0');
    });
    it('Prevents the user from typing for characters once max is exceeded - counter 2', () => {
        cy.visit('http://localhost:3000/example-3');

        cy.get('[data-cy="input-last-name"]')
            .type('123456789123456789');

        cy.get('[data-cy="input-last-name"]')
            .should('have.attr', 'value', '123456789123456');
    });

});