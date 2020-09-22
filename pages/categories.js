import Layout from '../components/layout/layout';
import Link from '../components/basic/NextLink/NextLink';
import { Categories } from '../components/layout/home';

import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../graphql/apollo';
import { CATEGORIES_QUERY } from '../graphql/queries';



const CategoriesPage = (props) => {
    const { data, loading, error } = useQuery(CATEGORIES_QUERY);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    const categories = data.categories;

    return (
        <Layout>

            <header className="categories__jumbotron">
                <div className="categories__jumbotron-container">
                    <article className="categories__jumbotron-content">
                        <p className="categories__jumbotron-dest"><Link href="/">Home</Link> / Categories</p>
                        <h1 className="categories__jumbotron-title">Categories</h1>
                    </article>
                </div>
            </header>

            <section className="categories-section">
                <div className="container">
                    <Categories categories={categories} />
                </div>
            </section>
        </Layout>
    )


}

export default withApollo(CategoriesPage);
