import { PropsWithChildren, ReactNode } from 'react';
import { Flavor } from '../../App';
import './Filling.css';


function Filling(props: PropsWithChildren<{ flavor: Flavor }>) {
    const getFilling = () => {
        switch (props.flavor) {
            case 'Cherry':
                return <div className="cherry-filling">{props.children}</div>
            
            case 'Apple':
                return <div className="apple-filling">{props.children}</div>

            case 'Lemon':
                return <div className="lemon-filling">{props.children}</div>
        
            default:
                return <></>
        }
    }
    return (
        getFilling()
    )
}

export default Filling;