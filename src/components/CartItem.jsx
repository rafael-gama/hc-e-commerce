import React from 'react'

const CartItem = ({item, onUpdateCart, onRemoveFromCart}) => {
  return (
    <div className='cart-item'>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <div className="cart-buttons">
            <input type="number" max={10} min={1} value={item.quantity} onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}/>
            <button onClick={() => onRemoveFromCart(item)}>Remover</button>
        </div>
    </div>
  )
}

export default CartItem