import React from 'react';

const Basket = (props) => {
    const {cardItem, onAddHandler, onRemoveHandler} = props;
    const itemPrice = cardItem.reduce((total, cur) => total + cur.price * cur.qty, 0);
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;
    return (
        <aside className='block col-1'>
            <h2>Card Items</h2>
            <div>
                {cardItem.length === 0 && <div>Card is Empty</div>}

                {cardItem.map(item => (
                    <div className='row' key={item.id}>
                        <div className='col-2'>{item.name}</div>
                        <div className='col-2'>
                            <button className='add' onClick={() => onAddHandler(item)}>+</button>
                            <button className='remove' onClick={() => onRemoveHandler(item)}>-</button>
                        </div>
                        <div className='col-2 text-right'>
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
            {cardItem.length !== 0 && (
                <>
                    <hr/>
                    <div className='row'>
                        <div className='col-2'>Items Price</div>
                        <div className='col-2 text-right'>${itemPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Tax Price</div>
                        <div className='col-2 text-right'>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Shipping Price</div>
                        <div className='col-2 text-right'>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Total Price</div>
                        <div className='col-2 text-right'><strong>${totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <hr/>
                    <div className='row'>
                        <button onClick={() => alert('Implement checkout')}>Checkout</button>
                    </div>

                </>
            )}
        </aside>
    )
}

export default Basket;