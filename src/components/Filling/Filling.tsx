import { PropsWithChildren } from 'react';
import { type Flavors } from '../Flavor';
import './Filling.css';


function Filling(props: PropsWithChildren<{ flavor: Flavors }>) {
    const { flavor } = props;
    
    return (
        <div className={`${flavor.toLowerCase()}-filling`}>{props.children}</div>
    )
}

export default Filling;