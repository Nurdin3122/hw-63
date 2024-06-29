import React from 'react';
import {Blog} from "../../../type.ts";

interface Props {
    cart:Blog;

}

const Cart:React.FC<Props> = ({cart}) => {
    return (
        <div className="card mb-2 p-5 " style={{cursor: 'pointer'}}>
            <div className="row g-0">
                <div className="col-sm-12 ps-2">
                    <span className="card-text">Created on:{cart.time} </span>
                    <p className="card-title">Author:{cart.author}</p>
                    <p className="card-text small">{cart.text}</p>
                    <button className="btn btn-primary">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;