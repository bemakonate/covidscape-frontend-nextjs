import StyledProductCard from '../../reusable/styledProductCard';
const Categories = (props) => {
    const { categories } = props;

    return (
        <section className="section-padding">
            <div className="container">
                <div className="products">
                    {categories && categories.map(category => {
                        const itemsSet = new Set(category.products.map(product => product.id));
                        return <StyledProductCard
                            key={category.id}
                            type="category"
                            link={`/categories/${category.slug}`}
                            title={category.name}
                            items={itemsSet.size}
                            image={category.image} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Categories;