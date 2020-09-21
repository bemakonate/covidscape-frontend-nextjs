import Link from 'next/link';

const BusinessMsg = () => {
    return (
        <section className="business-msg section-padding">
            <div className="business-msg__container container">
                <h2 className="business-msg__title">Show your style,<br /> and protect others</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dicta velit, beatae laborum voluptatem, atque aperiam sequi repellat fugit sunt iusto mollitia nobis voluptas! Libero minima dolorum optio nostrum suscipit!</p>
                <Link href="/products"><a className="btn btn-lg btn-dark">View all our products</a></Link>
            </div>
        </section>
    )
}

export default BusinessMsg;