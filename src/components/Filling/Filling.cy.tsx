import Filling from './Filling'

describe('Filling', () => {
    it('can mount', () => {
        cy.mount(<Filling flavor={"Cherry"} />)
    })
})