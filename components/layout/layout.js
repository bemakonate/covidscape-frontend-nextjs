import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/cart/actions';
import Navbar from './navigation/navbar';
import Sidebar from './navigation/sidebar';
import Footer from './footer/footer';
import CartSidebar from './checkout/cart-sidebar';
import FlashMessage from '../layout/flashMessage/flashMessage';

const Layout = ({ children, addPadding = false, ...props }) => {

    //Cart Sidebar props
    const { onOpenCartSidebar, onCloseCartSidebar, isCartSidebarOpen, cartItems, onChangeItemQuantity, onRemoveItem, cartTotalPrice, cartTotalItems, isFlashMessageOpen } = props;


    //Sidebar props
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className={`layout ${addPadding ? 'layout-padding' : null}`}>
            <FlashMessage />
            <Navbar
                openSidebar={openSidebar}
                openCartSidebar={onOpenCartSidebar}
                cartTotalItems={cartTotalItems} />

            <Sidebar
                isSidebarOpen={isSidebarOpen}
                closeSidebar={closeSidebar} />

            <CartSidebar
                isCartSidebarOpen={isCartSidebarOpen}
                closeCartSidebar={onCloseCartSidebar}
                cartItems={cartItems}
                changeItemQuantity={onChangeItemQuantity}
                removeItem={onRemoveItem}
                cartTotalPrice={cartTotalPrice} />

            <div className="site-content">
                {children}
            </div>

            <Footer />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isCartSidebarOpen: state.cart.isCartSidebarOpen,
        cartItems: state.cart.cart,
        cartTotalPrice: state.cart.totalPrice,
        cartTotalItems: state.cart.totalItems,
        isFlashMessageOpen: state.layout.isFlashMessageOpen,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onOpenCartSidebar: () => dispatch(actions.openCartSidebar()),
        onCloseCartSidebar: () => dispatch(actions.closeCartSidebar()),
        onChangeItemQuantity: (id, quantity) => dispatch(actions.changeItemQuantity(id, quantity)),
        onRemoveItem: (id) => dispatch(actions.removeItem(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
