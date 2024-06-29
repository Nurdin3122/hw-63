import React from 'react';
import {Blog} from "../../type.ts";
import Cart from "./Cart/Cart.tsx";


interface Props {
   carts:Blog[];
}

const Carts:React.FC<Props> = ({carts}) => {
    return (
        <div>
            <h4 className="text-center">Blog</h4>
            {carts.map((cart) => (
                <Cart key={cart.id} cart={cart}/>
            ))}
        </div>
    );
};

export default Carts;