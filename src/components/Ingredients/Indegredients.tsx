import { type Flavors } from '../Flavor';
import './Ingredients.css';

export const CrustIngredientsList = ['flour', 'salt', 'butter', 'oil', 'water'] as const;
type CrustIngredients = (typeof CrustIngredientsList)[number];

export const CherryIngredientsList = ['cherries', 'sugar', 'lemon juice', 'cornstarch', 'butter', 'cinnamon', 'egg' ] as const;
type CherryIngredients = (typeof CherryIngredientsList)[number] & CrustIngredients;

export const AppleIngredientsList = ['apples', 'cinnamon', 'cloves', 'nutmeg', 'salt', 'sugar', 'butter', 'flour', 'cornstarch', 'lemon juice', 'egg'] as const
type AppleIngredients = (typeof AppleIngredientsList)[number] & CrustIngredients

export const LemonIngredientsList = ['lemon juice', 'sugar', 'flour', 'cornstarch', 'salt', 'water', 'lemon zest', 'butter', 'egg' ] as const
type LemonIngredients = (typeof LemonIngredientsList)[number] & CrustIngredients

export const PotentialIngredientsList = [...CherryIngredientsList, ...AppleIngredientsList, ...LemonIngredientsList] as const
type MasterIngredients = (typeof PotentialIngredientsList)[number]

function Ingredients({ flavor }: { flavor: Flavors }) {
    const getIngredients = (): Partial<MasterIngredients[]> => {
        switch (flavor) {
            case 'Cherry':
                return [...CherryIngredientsList]

            case 'Apple':
                return [...AppleIngredientsList]

            case 'Lemon':
                return [...LemonIngredientsList]
        
            default:
                return [...PotentialIngredientsList]
        }
    }
    
    return (
        <>
            <h3>Ingredients Needed</h3>
            <ul id="ingredients">
                {
                    getIngredients().map(ingredient =>
                        <li key={ingredient}>{ingredient}</li>)
                }
            </ul>
        </>
    )
}

export default Ingredients