

describe('bake a pie', () => {
  it('can make a hot Apple pie and cut into 6 pieces', () => {
    cy.visit('/')
    cy.get('[data-cy=appleButton]').click();
    cy.get('ul li').its('length').should('equal', 11);
    cy.get('select').select('Hot')
    cy.get('[data-cy=cutInto6Pieces').click()
    cy.get('[data-cy=totalCalories').contains(439)
    cy.get('h2').contains("Apple")
    cy.get('.crust').should("have.css", 'background-color').and('eq', 'rgb(244, 175, 113)')
    cy.get('.apple-filling').should('have.css', 'background-color').and('eq', 'rgb(220, 114, 32)')
  })

  it('can make a hot Cherry pie and cut into 4 pieces', () => {
    cy.visit('/')
    cy.get('[data-cy=cherryButton]').click();
    cy.get('ul li').its('length').should('equal', 7);
    cy.get('select').select('Hot')
    cy.get('[data-cy=cutInto4Pieces').click()
    cy.get('[data-cy=totalCalories').contains(366)
    cy.get('h2').contains("Cherry")
    cy.get('.crust').should("have.css", 'background-color').and('eq', 'rgb(244, 175, 113)')
    cy.get('.cherry-filling').should('have.css', 'background-color').and('eq', 'rgb(242, 15, 10)')
  })

  it('can make a cold Lemon pie and cut into 2 pieces', () => {
    cy.visit('/')
    cy.get('[data-cy=lemonButton]').click();
    cy.get('ul li').its('length').should('equal', 9);
    cy.get('select').select('Cold')
    cy.get('[data-cy=cutInto2Pieces').click()
    cy.get('[data-cy=totalCalories').contains(1260)
    cy.get('h2').contains("Lemon")
    cy.get('.crust').should("have.css", 'background-color').and('eq', 'rgb(244, 175, 113)')
    cy.get('.lemon-filling').should('have.css', 'background-color').and('eq', 'rgb(248, 233, 133)')
  })
})