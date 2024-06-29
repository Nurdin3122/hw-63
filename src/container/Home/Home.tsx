import React from 'react';
import Carts from "../../components/Carts/Carts.tsx";
import {Blog} from "../../type.ts";

interface Props {
  carts:Blog[];
}

const Home:React.FC<Props> = ({carts}) => {
    return (
        <div className="row mt-2">
            <div className="col">
                <Carts carts={carts} />
            </div>
        </div>
    );
};

export default Home;