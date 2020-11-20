/// <reference types="cypress" />

describe("Dialog", () => {
    it("should open and close a basic dialog", () => {
        cy.visit("http://localhost:8080/dialog.html");

        cy.get(".dialog").should("not.exist");

        cy.get("#OpenModalDialog").click();
        cy.get(".dialog").should("exist");

        cy.get(".dialogButton").click();
        cy.get(".dialog").should("not.exist");
    });
});
