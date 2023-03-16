import { PropsWithChildren } from "react";
import { Flavor } from "../../App";
import { Crust } from "../Crust";
import { Filling } from "../Filling";
import { Topping } from "../Topping";
import './Pie.css';

function Pie(props: PropsWithChildren<{ flavor: Flavor}>) {
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