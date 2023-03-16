import Topping from "./Topping"

describe('Topping', () => {
    it('can mount with Cherry', () => {
        cy.mount(<Topping flavor="Cherry"/>)
    })

    it('can mount with Lemon topping', () => {
        cy.mount(<Topping flavor='Lemon' />)
    })

    it('can mount with Apple topping', () => {
        cy.mount(<Topping flavor='Apple' />)
    })
})