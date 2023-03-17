import Crust from './Crust';

describe('Crust', () => {
    it('can mount', () => {
        cy.mount(<Crust />)
        cy.get('.crust').should("have.css", 'background-color').and('eq', 'rgb(244, 175, 113)')
    })
})