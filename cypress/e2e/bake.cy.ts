describe('bake a pie', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  describe('App Pie', () => {
    beforeEach(() => {
      cy.get('[data-cy=appleButton]').click();
      cy.get('ul li').its('length').should('equal', 11);
      cy.get('.crust').should("have.css", 'background-color').and('eq', 'rgb(244, 175, 113)')
      cy.get('.apple-filling').should('have.css', 'background-color').and('eq', 'rgb(220, 114, 32)')
      cy.get('h2').contains("Apple")
    })
    describe('Hot', () => {
      beforeEach(() => {
        cy.get('select').select('Hot')
        cy.get('[data-cy="totalTime').contains(115)
      })
      it('can make a hot Apple pie and cut into 8 pieces', () => {
        cy.get('[data-cy=cutInto8Pieces').click()
        cy.get('[data-cy=totalCalories').contains(329)
      })
      it('can make a hot Apple pie and cut into 6 pieces', () => {
        cy.get('[data-cy=cutInto6Pieces').click()
        cy.get('[data-cy=totalCalories').contains(439)
      })
      it('can make a hot Apple pie and cut into 4 pieces', () => {
        cy.get('[data-cy=cutInto4Pieces').click()
        cy.get('[data-cy=totalCalories').contains(658)
      })
      it('can make a hot Apple pie and cut into 2 pieces', () => {
        cy.get('[data-cy=cutInto2Pieces').click()
        cy.get('[data-cy=totalCalories').contains(1316)
      })
      it('can make a whole hot Apple pie', () => {
        cy.get('[data-cy=cutInto1Pieces').click()
        cy.get('[data-cy=totalCalories').contains(2632)
      })
    })
    describe('Cold', () => {
      beforeEach(() => {
        cy.get('select').select('Cold')
        cy.get('[data-cy="totalTime').contains(220)
      })
      it('can make a cold Apple pie and cut into 8 pieces', () => {
        cy.get('[data-cy=cutInto8Pieces').click()
        cy.get('[data-cy=totalCalories').contains(329)
        cy.get('h2').contains("Apple")
      })
      it('can make a cold Apple pie and cut into 6 pieces', () => {
        cy.get('[data-cy=cutInto6Pieces').click()
        cy.get('[data-cy=totalCalories').contains(439)
        cy.get('h2').contains("Apple")
      })
      it('can make a cold Apple pie and cut into 4 pieces', () => {
        cy.get('[data-cy=cutInto4Pieces').click()
        cy.get('[data-cy=totalCalories').contains(658)
        cy.get('h2').contains("Apple")
      })
      it('can make a cold Apple pie and cut into 2 pieces', () => {
        cy.get('[data-cy=cutInto2Pieces').click()
        cy.get('[data-cy=totalCalories').contains(1316)
        cy.get('h2').contains("Apple")
      })
      it('can make a whole cold Apple pie', () => {
        cy.get('[data-cy=cutInto1Pieces').click()
        cy.get('[data-cy=totalCalories').contains(2632)
        cy.get('h2').contains("Apple")
      })
    })
  })
  describe('Cherry Pie', () => {
    beforeEach(() => {
      cy.get('[data-cy=cherryButton]').click();
      cy.get('ul li').its('length').should('equal', 7);
      cy.get('.crust').should("have.css", 'background-color').and('eq', 'rgb(244, 175, 113)')
      cy.get('.cherry-filling').should('have.css', 'background-color').and('eq', 'rgb(242, 15, 10)')
      cy.get('h2').contains("Cherry")
    })
    describe('Hot', () => {
      beforeEach(() => {
        cy.get('select').select('Hot')
        cy.get('[data-cy="totalTime').contains(80)
      })
      it('can make a hot Cherry pie and cut into 8 pieces', () => {
        cy.get('[data-cy=cutInto8Pieces').click()
        cy.get('[data-cy=totalCalories').contains(183)
      })
      it('can make a hot Cherry pie and cut into 6 pieces', () => {
        cy.get('[data-cy=cutInto6Pieces').click()
        cy.get('[data-cy=totalCalories').contains(244)
      })
      it('can make a hot Cherry pie and cut into 4 pieces', () => {
        cy.get('[data-cy=cutInto4Pieces').click()
        cy.get('[data-cy=totalCalories').contains(366)
      })
      it('can make a hot Cherry pie and cut into 2 pieces', () => {
        cy.get('[data-cy=cutInto2Pieces').click()
        cy.get('[data-cy=totalCalories').contains(732)
      })
      it('can make a whole hot Cherry pie', () => {
        cy.get('[data-cy=cutInto1Pieces').click()
        cy.get('[data-cy=totalCalories').contains(1464)
      })
    })
    describe('Cold', () => {
      beforeEach(() => {
        cy.get('select').select('Cold')
        cy.get('[data-cy="totalTime').contains(185)
      })
      it('can make a whole Cherry pie and cut into 8 pieces', () => {
        cy.get('[data-cy=cutInto8Pieces').click()
        cy.get('[data-cy=totalCalories').contains(183)
      })
      it('can make a whole Cherry pie and cut into 6 pieces', () => {
        cy.get('[data-cy=cutInto6Pieces').click()
        cy.get('[data-cy=totalCalories').contains(244)
      })
      it('can make a whole Cherry pie and cut into 4 pieces', () => {
        cy.get('[data-cy=cutInto4Pieces').click()
        cy.get('[data-cy=totalCalories').contains(366)
      })
      it('can make a whole Cherry pie and cut into 2 pieces', () => {
        cy.get('[data-cy=cutInto2Pieces').click()
        cy.get('[data-cy=totalCalories').contains(732)
      })
      it('can make a whole cold Cherry pie', () => {
        cy.get('[data-cy=cutInto1Pieces').click()
        cy.get('[data-cy=totalCalories').contains(1464)
      })
    })
  })


  describe('Lemon Pie', () => {
    beforeEach(() => {
      cy.get('[data-cy=lemonButton]').click();
      cy.get('ul li').its('length').should('equal', 9);
      cy.get('.crust').should("have.css", 'background-color').and('eq', 'rgb(244, 175, 113)')
      cy.get('.lemon-filling').should('have.css', 'background-color').and('eq', 'rgb(248, 233, 133)')
      cy.get('h2').contains("Lemon")
    })
    describe('Hot', () => {
      beforeEach(() => {
        cy.get('select').select('Hot')
        cy.get('[data-cy="totalTime').contains(50)
      })
      it('can make a hot Lemon pie and cut into 8 pieces', () => {
        cy.get('[data-cy=cutInto8Pieces').click()
        cy.get('[data-cy=totalCalories').contains(315)
      })
      it('can make a hot Lemon pie and cut into 6 pieces', () => {
        cy.get('[data-cy=cutInto6Pieces').click()
        cy.get('[data-cy=totalCalories').contains(420)
      })
      it('can make a hot Lemon pie and cut into 4 pieces', () => {
        cy.get('[data-cy=cutInto4Pieces').click()
        cy.get('[data-cy=totalCalories').contains(630)
      })
      it('can make a hot Lemon pie and cut into 2 pieces', () => {
        cy.get('[data-cy=cutInto2Pieces').click()
        cy.get('[data-cy=totalCalories').contains(1260)
      })
      it('can make a whole hot Lemon pie', () => {
        cy.get('[data-cy=cutInto1Pieces').click()
        cy.get('[data-cy=totalCalories').contains(2520)
      })
    })
    describe('Cold', () => {
      beforeEach(() => {
        cy.get('select').select('Cold')
        cy.get('[data-cy="totalTime').contains(155)
      })
      it('can make a cold Lemon pie and cut into 8 pieces', () => {
        cy.get('[data-cy=cutInto8Pieces').click()
        cy.get('[data-cy=totalCalories').contains(315)
      })
      it('can make a cold Lemon pie and cut into 6 pieces', () => {
        cy.get('[data-cy=cutInto6Pieces').click()
        cy.get('[data-cy=totalCalories').contains(420)
      })
      it('can make a cold Lemon pie and cut into 4 pieces', () => {
        cy.get('[data-cy=cutInto4Pieces').click()
        cy.get('[data-cy=totalCalories').contains(630)
      })
      it('can make a cold Lemon pie and cut into 2 pieces', () => {
        cy.get('[data-cy=cutInto2Pieces').click()
        cy.get('[data-cy=totalCalories').contains(1260)
      })
      it('can make a whole cold Lemon pie', () => {
        cy.get('[data-cy=cutInto1Pieces').click()
        cy.get('[data-cy=totalCalories').contains(2520)
      })
    })
  })
})