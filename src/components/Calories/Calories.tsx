import { Flavors } from "../Flavor";
import { NumberOfPieces } from "../Pieces";
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
        <p>{calculateCalories()}</p>
        </>
    )
}

export default Calories;