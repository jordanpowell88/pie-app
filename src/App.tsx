import { useState } from 'react'
import './App.css'
import { Crust, Filling, Topping } from './components'
import cherry from '../src/assets/cherry.jpg'
import apple from '../src/assets/apple.jpg'
import lemon from '../src/assets/lemon.jpg'

export type Flavor = 'Cherry' | 'Apple' | 'Lemon'

function App() {
  const [flavor, setFlavor] = useState<Flavor>('Cherry')


  return (
    <div className="App">
      <h1>Pie Maker</h1>
      <button onClick={() => setFlavor('Cherry')}>
        <img src={cherry} alt="Cherry" width={150} />
      </button>
      <button onClick={() => setFlavor('Apple')}>
        <img src={apple} alt="Apple" width={150} />
      </button>
      <button onClick={() => setFlavor('Lemon')}>
        <img src={lemon} alt="Lemon" width={150} />
      </button>
      <h2>{flavor}</h2>
      <Crust>
        <Filling flavor={flavor}>
          <Topping flavor={flavor} />
        </Filling>
      </Crust>
    </div>
  )
}

export default App
