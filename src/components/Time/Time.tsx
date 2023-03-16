import { Flavors } from "../Flavor";
import './Time.css';

function Time({ flavor, hot }: { flavor: Flavors, hot: boolean}) {
    const calculateTime = (): number | undefined => {
        let cookTime: number = 0;
        let prepTime: number = 0;

        if (flavor === 'Cherry') {
            prepTime = 20;
            cookTime = 45;
        }
        
        if (flavor === 'Apple') {
            prepTime = 30;
            cookTime = 70
        }

        if (flavor === 'Lemon') {
            prepTime = 10;
            cookTime = 25;
        }

        return prepTime + cookTime + (hot ? 15 : 120)
    }

    return (
        <>
            <h3>Total Time</h3>
            <p>{calculateTime()}</p>
        </>
    )
}

export default Time;