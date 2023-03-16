import App from "./App"

describe('AppComponent', () => {
    it('can mount', () => {
        cy.mount(<App />)
    })
})