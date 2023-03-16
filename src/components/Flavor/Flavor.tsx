import apple from '../../../src/assets/apple.jpg';
import cherry from '../../../src/assets/cherry.jpg';
import lemon from '../../../src/assets/lemon.jpg';

export type Flavors = 'Cherry' | 'Apple' | 'Lemon'

type FlavorClickHandler = { setFlavorOnClick: (flavor: Flavors) => void }

function Flavor({ setFlavorOnClick }: FlavorClickHandler) {
    return (
        <>
        <h3>Select A Flavor</h3>
        <button onClick={() => setFlavorOnClick('Cherry')}>
        <img src={cherry} alt="Cherry" width={150} />
        </button>
        <button onClick={() => setFlavorOnClick('Apple')}>
            <img src={apple} alt="Apple" width={150} />
        </button>
        <button onClick={() => setFlavorOnClick('Lemon')}>
            <img src={lemon} alt="Lemon" width={150} />
        </button>
      </>
    )
}

export default Flavor;