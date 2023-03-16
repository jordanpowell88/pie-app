import Flavor from './Flavor';

describe('Flavor', () => {
    it('can mount', () => {
        cy.mount(<Flavor setFlavorOnClick={cy.spy()} />)
    })

    it('can mount and select Cherry', () => {
        cy.mount(<Flavor setFlavorOnClick={cy.spy().as('flavorClick')} />)
        cy.get('button').first().click()
        cy.get('@flavorClick').should('have.been.calledWith', 'Cherry')
    })

    it('can mount and select Apply', () => {
        cy.mount(<Flavor setFlavorOnClick={cy.spy().as('flavorClick')} />)
        cy.get('button').eq(1).click()
        cy.get('@flavorClick').should('have.been.calledWith', 'Apple')
    })

    it('can mount and select Lemon', () => {
        cy.mount(<Flavor setFlavorOnClick={cy.spy().as('flavorClick')} />)
        cy.get('button').last().click()
        cy.get('@flavorClick').should('have.been.calledWith', 'Lemon')
    })
})