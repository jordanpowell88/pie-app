import { PropsWithChildren } from 'react';
import { Flavor } from '../../App';
import './Topping.css';

const CherryTopping = () => (
    <div className="cherry">
        <div className="lines">
            <div className="line-short"></div>
            <div className="line-medium"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line-medium"></div>
            <div className="line-short"></div>
        </div>
    </div>
)

const AppleTopping = () => (
    <div className="apple">
        <div className="lines">
            <div className="line-short"></div>
            <div className="line-medium"></div> 
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line-medium"></div>
            <div className="line-short"></div>
        </div>
    </div>
)

const LemonTopping = () => (
    <div className="lemon">

    </div>
)

function Topping(props: PropsWithChildren<{ flavor: Flavor }>) {
    const getToppings = ()  => {
        switch (props.flavor) {
            case 'Cherry':
                return <CherryTopping />
            
            case 'Apple':
                return <AppleTopping />

            case 'Lemon':
                return <LemonTopping />
        
            default:
               return <></>
        }
    }

    return (
        getToppings()
    )
}

export default Topping;