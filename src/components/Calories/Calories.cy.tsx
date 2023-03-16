import Calories from "./Calories";

describe('Calories', () => {
    describe('Cherry', () => {

        it('calculates calories for Cherry Pie with 8 Pieces', () => {
            cy.mount(<Calories flavor='Cherry' pieces={8} />);
            cy.get('p').contains(183)
        })
        it('calculates calories for Cherry Pie with 6 Pieces', () => {
            cy.mount(<Calories flavor='Cherry' pieces={6} />);
            cy.get('p').contains(244)
        })
        it('calculates calories for Cherry Pie with 4 Pieces', () => {
            cy.mount(<Calories flavor='Cherry' pieces={4} />);
            cy.get('p').contains(366)
        })
        it('calculates calories for Cherry Pie with 2 Pieces', () => {
            cy.mount(<Calories flavor='Cherry' pieces={2} />);
            cy.get('p').contains(732)
        })
        it('calculates calories for Cherry Pie with 1 Piece', () => {
            cy.mount(<Calories flavor='Cherry' pieces={1} />);
            cy.get('p').contains(1464)
        })
    })
    describe('Apple', () => {
        it('calculates calories for Apple Pie with 8 Pieces', () => {
            cy.mount(<Calories flavor='Apple' pieces={8} />);
            cy.get('p').contains(329)
        })
        it('calculates calories for Apple Pie with 6 Pieces', () => {
            cy.mount(<Calories flavor='Apple' pieces={6} />);
            cy.get('p').contains(439)
        })
        it('calculates calories for Apple Pie with 4 Pieces', () => {
            cy.mount(<Calories flavor='Apple' pieces={4} />);
            cy.get('p').contains(658)
        })
        it('calculates calories for Apple Pie with 2 Pieces', () => {
            cy.mount(<Calories flavor='Apple' pieces={2} />);
            cy.get('p').contains(1316)
        })
        it('calculates calories for Apple Pie with 1 Piece', () => {
            cy.mount(<Calories flavor='Apple' pieces={1} />);
            cy.get('p').contains(2632)
        })
    })
    describe('Lemon', () => {
        it('calculates calories for Lemon Pie with 8 Pieces', () => {
            cy.mount(<Calories flavor='Lemon' pieces={8} />);
            cy.get('p').contains(315)
        })
        it('calculates calories for Lemon Pie with 6 Pieces', () => {
            cy.mount(<Calories flavor='Lemon' pieces={6} />);
            cy.get('p').contains(420)
        })
        it('calculates calories for Lemon Pie with 4 Pieces', () => {
            cy.mount(<Calories flavor='Lemon' pieces={4} />);
            cy.get('p').contains(630)
        })
        it('calculates calories for Lemon Pie with 2 Pieces', () => {
            cy.mount(<Calories flavor='Lemon' pieces={2} />);
            cy.get('p').contains(1260)
        })
        it('calculates calories for Lemon Pie with 1 Piece', () => {
            cy.mount(<Calories flavor='Lemon' pieces={1} />);
            cy.get('p').contains(2520)
        })
    })
})