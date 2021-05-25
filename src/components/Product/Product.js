import React from 'react';

const Product = (props) => {
    const {product, onAddHandler} = props
    return (
        <div className='products'>
            <img className='small' src={product.img} alt={product.nackCount}/>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={() => onAddHandler(product)}>Add to Card</button>
            </div>
        </div>
    )
}
export default Product;
