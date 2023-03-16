import Pieces from './Pieces';

describe('Pieces', () => {
    it('can mount', () => {
        cy.mount(<Pieces selectedPiece={8} setPieceOnClick={cy.spy()} />)
    })

    it('selects the piece and calls the setPieceOnClick function', () => {
        cy.mount(<Pieces selectedPiece={8} setPieceOnClick={cy.spy().as('selectPieceClick')} />)
        cy.get('button').last().click();
        cy.get('@selectPieceClick').should('have.been.calledWith', 1)
    })
})