import { FormEvent } from "react";
import './Temperature.css';

type TemperatureClickHandler = { setTemperatureOnClick: (hot: boolean) => void }

function Temperature({ setTemperatureOnClick }: TemperatureClickHandler) {
    const onChange = (event: FormEvent<HTMLSelectElement>) => {
        const value = event.currentTarget.value
        setTemperatureOnClick(value === 'Hot' ? true : false)
    }
    return (
        <div>
            <h3>Select A Temperature</h3>
            <select onChange={onChange}>
                <option value='Hot'>Hot</option>
                <option value='Cold'>Cold</option>
            </select>
        </div>
    )
}

export default Temperature