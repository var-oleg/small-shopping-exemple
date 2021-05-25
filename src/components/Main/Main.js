import React from 'react';
import Product from "../Product/Product";

const Main = (props) => {
    const {products, onAddHandler, onRemoveHandler} = props;

    return(
        <main className='block col-2'>
            <h2>Products</h2>
            <div className='row'>
                {products.map((product) => (
                    <Product key = {products.id}
                             product = {product}
                             onAddHandler = {onAddHandler}
                             onRemoveHandler = {onRemoveHandler}/>
                ))}
            </div>
        </main>
    )
}

export default Main;