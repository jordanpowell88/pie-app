import { type Flavors } from "../Flavor";
import { type NumberOfPieces } from "../Pieces";
import './Calories.css';

function Calories({ flavor, pieces }: { flavor: Flavors, pieces: NumberOfPieces }) {
    const calculateCalories = (): number => {
        switch (flavor) {
            case 'Cherry':
                return Math.ceil(1464 / pieces)

            case 'Apple':
                return Math.ceil(2632 / pieces)

            case 'Lemon':
                return Math.ceil(2520 / pieces)

        }
    }
    
    return (
        <>
        <h3>Calories</h3>
        <p data-cy="totalCalories">{calculateCalories()}</p>
        </>
    )
}

export default Calories;