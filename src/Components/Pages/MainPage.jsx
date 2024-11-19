import { useState } from 'react'
import '../../Styles/ProductListing.css'
import "../../Styles/MainPage.css"
import logo from "../../assets/images/logo.png"
import ShoppingCart from './ShoppingCart';
import ProductListing from './ProductListing';
import { useSelector } from 'react-redux';

export default function MainPage({onSendData}) {
    
    const [viewShoppingCart, setViewShoppingCart] = useState(false);
    const [showProductsListingLink, setShowProductsListingLink] = useState(false);
    const cartItemsCount = useSelector(state => state.cart.cartItemsCount);
    
    const handleShowCartPageClick = () => {
        setViewShoppingCart(true);
        setShowProductsListingLink(true);
    }

    const handleShowProductListingPageClick = () =>{
        setViewShoppingCart(false);
        setShowProductsListingLink(false);
    }

    const handleDataFromCart = (data) => {
        setViewShoppingCart(data);
        setShowProductsListingLink(!showProductsListingLink);
    };

    const handleBackToLandingPage = () => {
        onSendData(false);
    }
    
    return (
        <>
        <div className='Header-Container'>
            <div className="left-side">
                <a className='Logo' onClick={handleBackToLandingPage}><img className='com-logo' src={logo} /></a>
                <h1>Nature Nest</h1>
                </div>
            <div className="right-side">
                {showProductsListingLink ?  
                <div>
                <a onClick={(e)=>handleShowProductListingPageClick(e)} style={{ textDecoration: 'none', display: 'inline-block'}}>
                    <div className='products-nav'><span>Products</span></div></a>
                </div>
                :""   
            }
                <div className='shopping-cart'>
                    <a onClick={(e)=>handleShowCartPageClick(e)}><i className="fa fa-shopping-bag cart-icon" aria-hidden="true"></i></a>
                    <svg className="cart-items-Count"xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="15" fill="#B4DCA0" />
                        <text className="cartItemsCount" x="20" y="30">{cartItemsCount}</text>
                    </svg>
                </div>
            </div>
        </div>
        {viewShoppingCart ? <ShoppingCart onSendData={handleDataFromCart}/> :<ProductListing />}
        </>
    )
}
