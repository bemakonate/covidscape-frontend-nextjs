import StyledProductCard from '../../reusable/styledProductCard';

const Products = (props) => {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="products">
                    {props.products && props.products.map((product, index) => {
                        return <StyledProductCard
                            key={`product-${index}`}
                            type="product"
                            link={`/products/${product.id}`}
                            title={product.title}
                            price={product.price}
                            product={product}
                            image={product.image} />
                    })}
                </div>
            </div>
        </section>
    )
}
export default Products;