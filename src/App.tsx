import { useState } from 'react';
import './App.css';
import { Flavor, Flavors, NumberOfPieces, Pie, Pieces, Temperature } from './components';

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
      <Pie flavor={flavor} />
    </div>
  )
}

export default App
