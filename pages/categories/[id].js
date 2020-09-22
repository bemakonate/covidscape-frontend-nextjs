
import React, { useState } from 'react'
import Layout from '../../components/layout/layout';
import { Products } from '../../components/layout/home';
import Link from '../../components/basic/NextLink/NextLink';
import BackgroundImage from '../../components/basic/BackgroundImage/BackgroundImage';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/router'


import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../../graphql/apollo';
import { SINGLE_CATEGORY_QUERY } from '../../graphql/queries';


const AllProducts = (props) => {

    const [categoriesDropdown, setCategoriesDropdown] = useState(false);

    const router = useRouter()
    const { data, loading, error } = useQuery(SINGLE_CATEGORY_QUERY, {
        variables: { id: router.query.id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


    const products = data.category.products;
    const category = data.category;



    return (
        <Layout>
            <header className={`header-height ${categoriesDropdown ? 'categories-dropdown' : null}`}>
                <BackgroundImage
                    image={category.image.url}
                    compClass='shop__jumbotron'>
                    <div className="shop__jumbotron-content">
                        <div className="container">
                            <div className="jumbo__sub-content">
                                <Link href="/products" className="jumbo__back-arrow"><BsArrowLeft /></Link>
                                <p className="shop__breadcrumb-list">
                                    <Link href="/">Home</Link> / <Link href="/categories">Categories</Link> / {category.name}
                                </p>
                                <h1 className="shop__jumbotron-title">{category.name}</h1>
                            </div>

                        </div>

                    </div>

                </BackgroundImage>
            </header>
            <section className="section-padding">
                <div className="container">
                    <div className="shop__content">
                        {/* <button>Open filter sidebar</button> */}
                        <Products products={products} />
                    </div>

                </div>
            </section>



        </Layout>
    )
}



export default withApollo(AllProducts);

