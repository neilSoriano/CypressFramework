
class HomePage
{
    getEditBox()
    {
        return cy.get('input[minlength="2"]')
    }

    getTwoWayDataBinding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender()
    {
        return cy.get('select')
    }

    getEntrepreneur()
    {
        return cy.get('#inlineRadio3')
    }

    getShopTab()
    {
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage;