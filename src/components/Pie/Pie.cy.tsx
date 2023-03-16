import Pie from './Pie';

describe('Pie', () => {
    it('can mount', () => {
        cy.mount(<Pie flavor={'Lemon'} />)
    })
})