import Temperature from "./Temperature";

describe('Temperature', () => {
    it('can mount', () => {
        cy.mount(<Temperature setTemperatureOnClick={cy.spy()} />)
    })

    it('can change the value of the input', () => {
        cy.mount(<Temperature setTemperatureOnClick={cy.spy().as('temperatureClick')} />)
        cy.get('select').select('Cold')
        cy.get('@temperatureClick').should('have.been.calledWith', false)
        cy.get('select').select('Hot')
        cy.get('@temperatureClick').should('have.been.calledWith', true)
    })
})