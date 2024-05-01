describe('Shopping Basket', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/'); // replace with your website URL
  });

  it('check we are in the correct review checkout page', () => {
    // Check we got the correct page title
    cy.get('h1').contains('Review Your Order & Complete Checkout');
  });

  it('allows adding and removing quantity of a product', () => {
    // Find the add quantity button for the first product and click it
    cy.get('[data-cy=add-quantity-button]').first().click();
    // Assert that the quantity input for the first product has been updated
    cy.get('[data-cy=quantity-input]').first().should('have.value', '3');

    // Find the remove quantity button for the second product and click it
    cy.get('[data-cy=remove-quantity-button]').eq(1).click();
    // Assert that the quantity input for the second product has been updated
    cy.get('[data-cy=quantity-input]').eq(1).should('have.value', '2');
  });

  it('allows deleting a product from the basket', () => {
    // Find the delete button for the second product and click it
    cy.get('[data-cy=delete-product-button]').eq(1).click();
    // Assert that the second product has been removed from the basket
    cy.get('[data-cy=product]').should('have.length', 1);
  });

  it('allows buying now', () => {
    // Find the buy now button and click it
    cy.get('[data-cy=buy-now-button]').click();
    // Assert that the confirmation alert appears
    cy.on('window:alert', (str) => {
      expect(str).to.equal('AJAX call complete. JSON data sent: {...}');
    });
  });
});
