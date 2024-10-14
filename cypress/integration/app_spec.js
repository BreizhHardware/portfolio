// cypress/integration/app_spec.js
describe('App Component', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('renders the app and checks if CSS is loaded', () => {
        cy.get('[data-testid="root"]', { timeout: 10000 }).should('exist');
        cy.get('[data-testid="root"]').should('have.class', 'min-h-screen py-10 bg-gray-100 dark:bg-gray-900 m-0');
    });

    it('should match the previous screenshot', () => {
        cy.get('[data-testid="root"]').matchImageSnapshot({
            failureThreshold: 0.01, // tolérance de 1%
            failureThresholdType: 'percent', // type de tolérance (peut être 'pixel' ou 'percent')
        });
    });
});