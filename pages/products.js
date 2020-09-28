import React, { useState } from 'react'
import Layout from '../components/layout/layout';
import initApolloFetch from '../constants/initApolloFetch';

import BackgroundImage from '../components/basic/BackgroundImage/BackgroundImage';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { BsArrowLeft } from 'react-icons/bs';
import { CgMore } from 'react-icons/cg';
import Link from '../components/basic/NextLink/NextLink';
import { Products } from '../components/layout/home';

import SEO from '../components/reusable/SEO';
import { withApollo } from '../graphql/apollo';
import { PRODUCTS_AND_CATEGORIES_QUERY } from '../graphql/queries';

const AllProducts = ({ data, error }) => {

    const [categoriesDropdown, setCategoriesDropdown] = useState(false);

    if (error) return <p>Error: {error.message}</p>;

    const allProducts = data.products;
    const categories = data.categories;
    const toggleCategoriesDropdown = () => setCategoriesDropdown(!categoriesDropdown);



    return (
        <Layout>
            <SEO title="Shop" />
            <header className={`header-height ${categoriesDropdown ? 'categories-dropdown' : null}`}>
                <BackgroundImage
                    image="/images/washing-hands.jpeg"
                    compClass='shop__jumbotron'>
                    <div className="shop__jumbotron-content">
                        <div className="container">
                            <div className="jumbo__sub-content">

                                <Link href="/" className="jumbo__back-arrow shop-arrow"><BsArrowLeft /></Link>
                                <p className="shop__breadcrumb-list">
                                    <Link href="/">Home</Link> / <Link href="/categories">Categories</Link> / Shop
                                </p>
                                <h1 className="shop__jumbotron-title">Shop</h1>
                                <button onClick={toggleCategoriesDropdown} className="shop__jumbotron-categories-btn">
                                    <span className="shop__jumbotron-categories-btn__text">Categories</span>
                                    <span className="shop__jumbotron-categories-btn__arrow">
                                        {categoriesDropdown ? <IoIosArrowDown /> : <IoIosArrowUp />}
                                    </span>
                                </button>
                            </div>
                            {categoriesDropdown && <ul className="shop__jumbotron-categories-list">
                                {categories.map(category =>
                                    <li key={category.id}>
                                        <Link className="shop__jumbotron-categories-item" href={`/categories/${category.slug}`}>
                                            {category.name}
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link className="shop__jumbotron-categories-item more-categories-item" href="/categories">
                                        More <CgMore className="more-categories-icon" />
                                    </Link>
                                </li>
                            </ul>}

                        </div>

                    </div>

                </BackgroundImage>
            </header>
            <section className="section-padding">
                <div className="container">
                    <div className="shop__content">
                        <Products products={allProducts} />
                    </div>
                </div>
            </section>

        </Layout>
    )
}


AllProducts.getInitialProps = async ctx => {
    const res = await initApolloFetch(ctx, { query: PRODUCTS_AND_CATEGORIES_QUERY });
    return res;
}

export default withApollo(AllProducts);
