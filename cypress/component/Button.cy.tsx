import { Button } from "../../src/Components/UI/Button";

describe("Button.cy.ts", () => {
  it("calls onClick on click", () => {
    let clicked = false;
    cy.mount(<Button onClick={() => (clicked = true)}>Some text</Button>);
    cy.contains("Some text")
      .click()
      .then(() => {
        expect(clicked).to.be.true;
      });
  });
});
