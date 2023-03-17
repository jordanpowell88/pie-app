import { PropsWithChildren } from "react";
import { Crust } from "../Crust";
import { Filling } from "../Filling";
import { type Flavors } from "../Flavor";
import { Topping } from "../Topping";
import './Pie.css';

function Pie(props: PropsWithChildren<{ flavor: Flavors }>) {
    const { flavor } = props;
   return (
    <>
    <h2>{flavor}</h2>
      <Crust>
        <Filling flavor={flavor}>
          <Topping flavor={flavor} />
        </Filling>
      </Crust>
    </>
   )
}
export default Pie;