
class ProductPage {
    getProductNames(){
        return cy.get('.card-title')
    }

    addButtons() {
        return cy.get('button.btn.btn-info')
    }
    checkout() {
        return cy.get('.nav-item.active')
    }
}
export default ProductPage;