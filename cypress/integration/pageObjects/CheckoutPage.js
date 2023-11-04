class CheckoutPage {
    getCountry() {
        cy.get('#country').type('India')
    }

    getMenuOption() {
        cy.get('.suggestions > ul > li > a').click()
    }

    getCheckbox() {
        // {force:true} added since element was being covered by another
        cy.get('#checkbox2').click({force: true})
    }

    purchase() {
        cy.get('input[type="submit"]').click()
    }

    getMessage() {
        cy.get('.alert')
    }
}
export default CheckoutPage;