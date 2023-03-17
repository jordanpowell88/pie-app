import Ingredients, { AppleIngredientsList, CherryIngredientsList, LemonIngredientsList } from "./Indegredients";

describe('Ingredients', () => {
    it('can mount with Cherry Ingredients', () => {
        cy.mount(<Ingredients flavor="Cherry" />)
        cy.get('ul li').its('length').should('equal', 7)
        cy.get('ul').each((item, index) => {
            cy.wrap(item).should('contain.text', CherryIngredientsList[index])
        })
    })

    it('can mount with Apple Ingredients', () => {
        cy.mount(<Ingredients flavor='Apple' />)
        cy.get('ul li').its('length').should('equal', 11)
        cy.get('ul').each((item, index) => {
            cy.wrap(item).should('contain.text', AppleIngredientsList[index])
        })
    })

    it('can mount with Lemon Ingredients', () => {
        cy.mount(<Ingredients flavor='Lemon' />)
        cy.get('ul li').its('length').should('equal', 9)
        cy.get('ul').each((item, index) => {
            cy.wrap(item).should('contain.text', LemonIngredientsList[index])
        })
    })
})