describe('Texbox with max characters', () => {
    it('displays the appropiate remaining characters count', () => {
        cy.visit('http://localhost:3000/example-2');

        cy.get('span')
            .invoke('text')
            .should('equal', '15');

        cy.get('input')
            .type('12345');

        cy.get('span')
            .invoke('text')
            .should('equal', '10');

        cy.get('input')
            .type('hello my friend');

        cy.get('span')
            .invoke('text')
            .should('equal', '0');
    });
    it('Prevents the user from typing for characters once max is exceeded', () => {
        cy.visit('http://localhost:3000/example-2');

        cy.get('input')
            .type('123456789123456789');

        cy.get('input')
            .should('have.attr', 'value', '123456789123456');
    });
});