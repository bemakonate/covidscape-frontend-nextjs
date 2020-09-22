import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router'


import * as actions from '../../store/cart/actions';
import Layout from '../../components/layout/layout';
import AspectRatio from '../../components/basic/aspectRatio/aspectRatio';
import ItemQuantity from '../../components/reusable/itemQuantity';
import { FiCheckCircle } from 'react-icons/fi';

import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../../graphql/apollo';
import { SINGLE_PRODUCT_QUERY } from '../../graphql/queries';

const Product = ({ ...props }) => {
    const router = useRouter()
    const [itemQuantity, setItemQuantity] = useState(1);
    const [addingToCart, setAddingToCart] = useState(false);
    const [cartText, setCartText] = useState(null);


    //If the page is adding a product change the content, and functionality
    useEffect(() => {
        if (addingToCart) {
            setCartText(<FiCheckCircle />);
        }
        else {
            setCartText("Add To Cart")
        }
    }, [addingToCart]);


    const { data, loading, error } = useQuery(SINGLE_PRODUCT_QUERY, {
        variables: { id: router.query.id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const product = data.product;
    const { title, price, description, image } = data.product;




    const addToCart = (product, quantity) => {
        setAddingToCart(true);
        props.onAddToCart(product, quantity);
        props.onOpenCartSidebar();
        setTimeout(() => setAddingToCart(false), 2000)
    };

    const renderResults = () => (
        <Layout>
            <main className="product-page">
                <div className="product-page-container">
                    <div className="product-info">
                        <div className="single-product__photos">
                            <AspectRatio height="125%">
                                <img src={image.formats.medium.url} className="single-product__main-photo" />
                            </AspectRatio>
                        </div>

                        <div className="single-product__content">
                            <div className="single-product__content-container">
                                <h2 className="single-product__title">{title}</h2>
                                <p className="single-product__price"><span className="single-product__dollar-sign">$</span>{price}</p>

                                <p className="single-product__description">{description}</p>
                                <ItemQuantity
                                    expand
                                    num={itemQuantity}
                                    getQuantity={setItemQuantity}
                                    styleClass="single-product__item-quantity" />

                                <button
                                    className={`cart-btn ${addingToCart ? 'active' : ''}`}
                                    onClick={() => addToCart(product, itemQuantity)}>{cartText}</button>
                            </div>
                        </div>
                    </div>


                </div>
            </main>

        </Layout>
    )

    const results = renderResults();
    return results;
}
const mapDispatchToProps = dispatch => {
    return {
        onAddToCart: (item, quantity) => dispatch(actions.addToCart(item, quantity)),
        onOpenCartSidebar: () => dispatch(actions.openCartSidebar()),
    }
}
export default withApollo(connect(null, mapDispatchToProps)(Product));
