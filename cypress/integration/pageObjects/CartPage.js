class CartPage {
    getPrices() {
        cy.get('tr td:nth-child(4) strong')
    }

    getTotal() {
        cy.get('h3 strong')
    }

    checkout() {
        cy.contains('Checkout').click()
    }
}

export default CartPage;