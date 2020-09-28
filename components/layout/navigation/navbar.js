import React from 'react'
import NavLinks from './navLinks';
import Link from '../../basic/NextLink/NextLink';
import { connect } from 'react-redux';

//Icons
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { GrSearch } from 'react-icons/gr';
import { RiSurgicalMaskLine } from 'react-icons/ri';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const navigation = (props) => {
    const { isUserCartLoaded } = props;
    const currentPath = typeof window !== 'undefined' && window.location.pathname;
    const ifToOpenCartSidebar = (currentPath !== '/cart') || (currentPath !== '/checkout') ? props.openCartSidebar : null;

    return (
        <nav className="nav">

            <div className="nav__page-links">
                <HiOutlineMenuAlt2 className="nav-icon nav-menu-icon" onClick={props.openSidebar} />
                <NavLinks
                    styleClass="nav-links"
                    navLinkClass="nav-link" />
            </div>
            <Link href="/" className="nav__brand" ariaLabel="home link"><RiSurgicalMaskLine /></Link>

            <div className="nav__user-section">
                <GrSearch className="nav__search-icon" />

                <div className="nav__cart" onClick={ifToOpenCartSidebar}>
                    <span>Cart</span>
                    <div className="nav__cart-num">
                        <span>{isUserCartLoaded ? props.cartTotalItems : <BiDotsHorizontalRounded />}</span>
                    </div>
                </div>
            </div>
        </nav>

    )
}

const mapStateToProps = state => {
    return {
        isUserCartLoaded: state.cart.loadedCart
    }
}

export default connect(mapStateToProps)(navigation)
