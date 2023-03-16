import { useState } from 'react';
import './App.css';
import { Calories, Flavor, Flavors, Ingredients, NumberOfPieces, Pie, Pieces, Temperature, Time } from './components';

function App() {
  const [flavor, setFlavor] = useState<Flavors>('Cherry');
  const [hot, setHot] = useState<boolean>(true);
  const [pieces, setPieces] = useState<NumberOfPieces>(8);

  return (
    <div className="App">
      <h1>Pie Maker</h1>
      <Flavor setFlavorOnClick={setFlavor} />
      <Temperature setTemperatureOnClick={setHot} />
      <Pieces selectedPiece={pieces} setPieceOnClick={setPieces} />
      <Ingredients flavor={flavor} />
      <Time flavor={flavor} hot={hot} />
      <Calories flavor={flavor} pieces={pieces} />
      <Pie flavor={flavor} />
    </div>
  )
}

export default App
