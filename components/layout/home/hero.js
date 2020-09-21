import Link from 'next/link';
import BackgroundImage from '../../basic/BackgroundImage/BackgroundImage';
const Hero = (props) => {
    return (
        <header>
            <BackgroundImage compClass="home-jumbotron" image={props.bgImg}>
                <article className="container">
                    <h2>Staying safe,<br />doesn't mean staying dry </h2>
                    <Link href="/products"><a className="home-jumbotron__shop-link" >Shop Now</a></Link>
                </article>
            </BackgroundImage>
        </header>
    )
}
export default Hero;  