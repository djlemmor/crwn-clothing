import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div onClick={removeItemHandler} className='arrow'>&#10094;</div>
        {quantity}
        <div onClick={addItemHandler} className='arrow'>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckoutItem;