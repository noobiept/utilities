/// <reference types="cypress" />

describe("Dialog", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/dialog.html");
    });

    it("Should open and close a basic dialog.", () => {
        cy.get(".dialog").should("not.exist");

        cy.get("#OpenModalDialog").click();
        cy.get(".dialog").should("exist");

        cy.get(".dialogButton").click();
        cy.get(".dialog").should("not.exist");
    });

    it("Should close the dialog when the 'escape' key is pressed.", () => {
        cy.get(".dialog").should("not.exist");

        cy.get("#OpenModalDialog").click();
        cy.get(".dialog").should("exist");

        cy.get("body").trigger("keyup", { key: "Escape", code: "Escape" });
        cy.get(".dialog").should("not.exist");
    });

    it("Should close the dialog when the 'enter' key is pressed.", () => {
        cy.get(".dialog").should("not.exist");

        cy.get("#OpenModalDialog").click();
        cy.get(".dialog").should("exist");

        cy.get("body").trigger("keyup", { key: "Enter", code: "Enter" });
        cy.get(".dialog").should("not.exist");
    });
});
