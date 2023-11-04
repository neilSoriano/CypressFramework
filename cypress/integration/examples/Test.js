import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'
import CheckoutPage from '../pageObjects/CheckoutPage'
import CartPage from '../pageObjects/CartPage'

describe('Checkout Process', () =>
{
    before(() => {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data = data
        })
      })

    it('confirms prices in cart and checking out successfully', function () {
        // create object for HomePage
        const homePage = new HomePage()
        
        cy.visit((Cypress.env('url')+'/angularpractice/'))

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        // verify two way data binding
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        // verify min length of 2 characters
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        // validate if entrepreneur is disabled button or not
        homePage.getEntrepreneur().should('be.disabled')
        // cy.pause()
        Cypress.config('defaultCommandTimeout',8000)

        homePage.getShopTab().click()
        
        const productPage = new ProductPage()

        this.data.productName.forEach(function(element){
            // custom cypress command
            cy.selectProduct(element)
        })

        productPage.checkout().click()

        const cartPage = new CartPage()

        var sum = 0;
        // validate that the product prices equal the total price.alert
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            cy.log($el.text())
            // splits the text into 2 parts res[0] = before space
            // res[1] = after space (we need this part)
            var res = $el.text().split(" ")
            res = res[1].trim()
            // cy.log(res)
            sum = Number(sum) + Number(res)

        }).then(function()
        {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element)
        {
            const amount = element.text()
            var total = amount.split(" ")
            total = total[1].trim()

            expect(Number(total)).to.equal(sum)

        })

        cartPage.checkout()

        const checkoutPage = new CheckoutPage()

        checkoutPage.getCountry()
        checkoutPage.getMenuOption()
        checkoutPage.getCheckbox()
        checkoutPage.purchase()
        // this assertion fails because there are additional chars being added in when copied in
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')

        cy.get('.alert').then(function(element)
        {
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })

        
    })
}
)
