import Filling from './Filling'

describe('Filling', () => {
    it('can mount with Cherry Filling', () => {
        cy.mount(<Filling flavor={"Cherry"} />)
    })

    it('can mount with Apple Filling', () => {
        cy.mount(<Filling flavor="Apple" />)
    })

    it('can mount with Lemon Filling', () => {
        cy.mount(<Filling flavor="Lemon" />)
    })
})