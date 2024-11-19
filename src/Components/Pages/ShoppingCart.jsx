import {useDispatch, useSelector} from 'react-redux'
import '../../Styles/ShoppingCart.css';
import { clearCart, removeFromCart, updateQuantity, updateDisabledItems } from '../../Redux/Slices/cartSlice';

export default function ShoppingCart({onSendData}) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalCartItems = useSelector(state => state.cart.cartItemsCount);
    const totalCost = cartItems.reduce((total, item) => total + item.itemPrice * item.quantity, 0);

    const handleCheckoutClick = () => {
        alert("Coming Soon!");
    }
    const handleContinueShoppingClick = () => {
        onSendData(false);
    }

    const handleQuantityButtonClick = (type) => {
        dispatch(updateQuantity(type));
    }
    
    const handleCartItemRemove = (item) => {
        handleUpdateItemStatus(item.id);
        dispatch(removeFromCart(item));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleUpdateItemStatus = (Id) => {
        dispatch(updateDisabledItems({switchType:false, itemId:Id}));
    }

  return (
    <>
        <div className='shoppingCartContainer'>
            <div className="cart-item-cards">
            <span className='heading'>Cart</span>
                <div className="cart-left-section">
                <div className="cart-item-headings">
                    <span>Item Name</span>
                    <span>Quantity</span>
                    <span>Price</span>
                    <span>Total</span>
                </div>
                {cartItems.map((item)=>(   
                    <div className="cart-item" key={item.id}>
                        <div className="cart-item-image"><img src={item.itemImage}/></div>
                        <div className='cart-item-details'>
                            <div className="cart-item-line1">
                                <div className="cart-item-name">{item.itemName}</div>
                                <div className="cart-item-quantity-section">
                                        <div className="quantity-change-button"><a onClick={() => handleQuantityButtonClick({item:item, operation:"decrease"})}><i className="fa fa-minus-circle" aria-hidden="true"></i></a></div>
                                            <span className="cart-item-count-number">{item.quantity}</span>
                                        <div className="quantity-change-button"><a onClick={() => handleQuantityButtonClick({item:item, operation:"increase"})}><i className="fa fa-plus-circle" aria-hidden="true"></i></a></div>
                                </div>
                                <div className="cart-item-price">${item.itemPrice}</div>
                                <div className="cart-item-total-price">${item.cartPrice}</div>
                                <div className="cart-item-delete">
                                    <a onClick={()=>handleCartItemRemove(item)}><i className="fa fa-trash" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                
                <div className='clear-cart-button'>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </div>
            </div>
            <div className="cart-right-section">
                <div className='total-section'>
                    <div className='total-section-line'>
                        <span>Total Cart Items :</span>
                        <span className='total-price'>{totalCartItems}</span>
                    </div>
                    <div className='total-section-line'>
                        <span>Total Cost :</span>
                        <span  className='total-price'>${totalCost}</span>
                    </div>
                </div>
            <div className="cart-button-section">
                <button onClick={handleContinueShoppingClick}> Continue Shopping</button>
                <button onClick={handleCheckoutClick}> Check Out</button>
            </div>
            </div>
        </div>
    </>
  )
}
