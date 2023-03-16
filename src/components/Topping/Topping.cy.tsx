import Topping from "./Topping"

describe('Topping', () => {
    it('can mount', () => {
        cy.mount(<Topping flavor="Cherry"/>)
    })
})