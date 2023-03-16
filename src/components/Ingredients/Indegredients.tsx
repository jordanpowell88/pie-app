import { useEffect, useState } from 'react';
import { Flavors } from '../Flavor';
import './Ingredients.css'

const CrustIngredients = ['flour', 'salt', 'butter', 'oil', 'water'] as const;
type CrustIngredientList = (typeof CrustIngredients)[number];

const CherryIngredients = ['cherries', 'sugar', 'lemon juice', 'cornstarch', 'butter', 'cinnamon', 'egg' ] as const;
type CherryIngredientList = (typeof CherryIngredients)[number] & CrustIngredientList;

const AppleIngredients = ['apples', 'cinnamon', 'cloves', 'nutmeg', 'salt', 'sugar', 'butter', 'flour', 'cornstarch', 'lemon juice', 'egg'] as const
type AppleIngredientList = (typeof AppleIngredients)[number] & CrustIngredientList

const LemonIngredients = ['lemon juice', 'sugar', 'flour', 'cornstarch', 'salt', 'water', 'lemon zest', 'butter', 'egg' ] as const
type LemonIngredientList = (typeof LemonIngredients)[number] & CrustIngredientList

const PotentialIngredients = [...CherryIngredients, ...AppleIngredients, ...LemonIngredients] as const
type MasterIngredientList = (typeof PotentialIngredients)[number]

function Ingredients({ flavor }: { flavor: Flavors }) {
    const getIngredients = (): Partial<MasterIngredientList[]> => {
        switch (flavor) {
            case 'Cherry':
                return [...CherryIngredients]

            case 'Apple':
                return [...AppleIngredients]

            case 'Lemon':
                return [...LemonIngredients]
        
            default:
                return [...PotentialIngredients]
        }
    }
    
    return (
        <>
            <h3>Ingredients Needed</h3>
            <ul>
                {
                    getIngredients().map(ingredient =>
                        <li key={ingredient}>{ingredient}</li>)
                }
            </ul>
        </>
    )
}

export default Ingredients