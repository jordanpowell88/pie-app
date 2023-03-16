import Time from "./Time";

describe('Time', () => {
    it('calculates a Cherry pie cooled', () => {
        cy.mount(<Time flavor="Cherry" hot={false} />)
        cy.get('p').contains(185)
    })

    it('calculates a Cherry pie hot', () => {
        cy.mount(<Time flavor='Cherry' hot={true} />)
        cy.get('p').contains(80)
    })

    it('calculates an Apple pie cooled', () => {
        cy.mount(<Time flavor="Apple" hot={false} />)
        cy.get('p').contains(220)
    })

    it('calculates an Apple pie hot', () => {
        cy.mount(<Time flavor='Apple' hot={true} />)
        cy.get('p').contains(115)
    })

    it('calculates a Lemon pie cooled', () => {
        cy.mount(<Time flavor="Lemon" hot={false} />)
        cy.get('p').contains(155)
    })

    it('calculates a Lemon pie hot', () => {
        cy.mount(<Time flavor='Lemon' hot={true} />)
        cy.get('p').contains(50)
    })
})