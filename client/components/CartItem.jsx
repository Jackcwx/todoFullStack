import React from 'react'

const CartItem = (props) => {
  const { name, id, quantity } = props.item
  const displayQuantity = (quantity === 0) ? '' : quantity
  return (
    <tr>
      <td>{name}</td>
      <td>
        <input
          className='update-input'
          value={displayQuantity}
          onChange={(e) => props.update(id, e.target.value)} />
      </td>
      <td><button onClick={() => props.deleteFromCart(id)}>
        <span className='fa fa-trash fa-2x' />
      </button></td>
    </tr>
  )
}

export default CartItem
