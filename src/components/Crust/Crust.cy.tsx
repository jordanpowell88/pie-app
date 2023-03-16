import { Filling } from '../Filling';
import { Topping } from '../Topping';
import Crust from './Crust';

describe('Crust', () => {
    it('can mount', () => {
        cy.mount(<Crust />)
    })
})