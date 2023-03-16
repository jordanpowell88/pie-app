import { PropsWithChildren } from 'react';
import { Flavors } from '../Flavor';
import './Topping.css';

const LinedCrust = () => (
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
)

const CherryTopping = () => (
    <div className="cherry">
        <LinedCrust />
    </div>
)

const AppleTopping = () => (
    <div className="apple">
        <LinedCrust />
    </div>
)

const LemonTopping = () => (
    <div className="lemon"></div>
)

function Topping(props: PropsWithChildren<{ flavor: Flavors }>) {
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