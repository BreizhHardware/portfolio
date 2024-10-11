// cypress/integration/app_spec.js
describe('App Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('renders the app and checks if CSS is loaded', () => {
        cy.get('[data-testid="root"]', { timeout: 10000 }).should('exist');
        cy.get('[data-testid="root"]').should('have.class', 'min-h-screen py-10 px-3 sm:px-5 bg-gray-100 dark:bg-gray-900');
    });
});