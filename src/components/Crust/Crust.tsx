import { PropsWithChildren } from 'react'
import './Crust.css'

function Crust(props: PropsWithChildren<{}>) {
    return (
        <div className="crust">
            { props.children }
        </div>
    )
}

export default Crust