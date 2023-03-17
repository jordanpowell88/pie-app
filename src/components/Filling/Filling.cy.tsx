import Filling from './Filling'

describe('Filling', () => {
    it('can mount with Cherry Filling', () => {
        cy.mount(<Filling flavor={"Cherry"} />)
        cy.get('.cherry-filling').should('have.css', 'background-color').and('eq', 'rgb(242, 15, 10)')
    })

    it('can mount with Apple Filling', () => {
        cy.mount(<Filling flavor="Apple" />)
        cy.get('.apple-filling').should('have.css', 'background-color').and('eq', 'rgb(220, 114, 32)')
    })

    it('can mount with Lemon Filling', () => {
        cy.mount(<Filling flavor="Lemon" />)
        cy.get('.lemon-filling').should('have.css', 'background-color').and('eq', 'rgb(248, 233, 133)')
    })
})