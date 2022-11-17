describe("empty spec", () => {
  it("passes", () => {
    cy.viewport("iphone-5");
    cy.visit("");
    const url = cy.url();
    cy.get('[data-testid="mobile-menu-button"]').click();
    cy.get('[data-testid="mobile-menu"]')
      .should("be.visible")
      .contains("Portfolio")
      .click();
    cy.url().should("not.eq", url);
  });
});
