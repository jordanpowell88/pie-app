import Ingredients from "./Indegredients";

describe('Ingredients', () => {
    it('can mount with Cherry Ingredients', () => {
        cy.mount(<Ingredients flavor="Cherry" />)
        cy.get('ul li').its('length').should('equal', 7)
    })

    it('can mount with Apple Ingredients', () => {
        cy.mount(<Ingredients flavor='Apple' />)
        cy.get('ul li').its('length').should('equal', 11)
    })

    it('can mount with Lemon Ingredients', () => {
        cy.mount(<Ingredients flavor='Lemon' />)
        cy.get('ul li').its('length').should('equal', 9)
    })
})