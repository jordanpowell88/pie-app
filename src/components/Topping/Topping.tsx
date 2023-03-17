import { PropsWithChildren } from 'react';
import { type Flavors } from '../Flavor';
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

function Topping(props: PropsWithChildren<{ flavor: Flavors }>) {
    const { flavor } = props;
    
    return (
        <div className={flavor.toLowerCase()}>
            {
                flavor !== 'Lemon' && <LinedCrust />
            }
        </div>
    )
}

export default Topping;