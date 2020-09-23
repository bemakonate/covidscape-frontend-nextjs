import React from 'react'
import AspectRatio from '../../basic/aspectRatio/aspectRatio';
import classes from './productCard.module.scss';
import { truncate } from '../../../constants/helpers';
import { RiShoppingCart2Line } from 'react-icons/ri';
import Dollar from '../dollar'
import { FiInfo } from 'react-icons/fi';
import { BsHeart } from 'react-icons/bs';
import Link from 'next/link';
import { Image } from 'cloudinary-react';

const productCard = ({ image, type = 'product', ...props }) => {


    const productClasses = `${classes.Product} ${props.styleClass}`;
    const imgClasses = `${classes.ProductImg} ${props.imageStyle}`;
    let cardInfo = null;
    let productBtns = null;



    switch (type) {
        case 'category':

            const categoryInfo = (
                <div className={`${classes.CategoryDetails} ${classes.CardDetails}`}>
                    <p className={classes.CategoryItems}>{props.items} products</p>
                    <h3 className={classes.CategoryTitle}><span className={classes.CategoryTitleText}>{props.title || 'Category'}</span></h3>
                </div>
            );

            cardInfo = categoryInfo;
            break;

        default:
            productBtns = (
                <div className={classes.ProductBtns}>
                    <button className={classes.ProductBtn}><Link href={props.link}><FiInfo /></Link></button>
                    <button className={classes.ProductBtn} onClick={props.cartBtnClicked}><RiShoppingCart2Line /></button>
                    <button className={classes.ProductBtn}><BsHeart /></button>
                </div >
            )
            const productInfo = (
                <div className={`${classes.ProductDetails} ${classes.CardDetails}`}>
                    <p className={classes.ProductTitle}>{truncate(props.title, 20) || 'Product'}</p>
                    <h3 className={classes.ProductPrice}>{props.price ? <Dollar num={props.price} /> : 'Price May Vary'}</h3>
                </div>
            );
            cardInfo = productInfo;
    }




    return (
        <div className={productClasses} >
            <AspectRatio height="133%" styleClass={props.imgContainerStyle}>
                <Link href={props.link}>
                    <a className={classes.ProductImgLink}>
                        {/* <img src={image.formats.medium.url} className={imgClasses} /> */}
                        <Image cloudName="dqhul90vx" publicId={image.formats.small.provider_metadata.public_id} className={imgClasses} format="webp" secure="true" />
                        <div className={`${classes.ProductOverlay} ${props.overlayStyle ? props.overlayStyle : null}`}></div>
                    </a>
                </Link>

                {productBtns}
            </AspectRatio>

            <Link href={props.link}>{cardInfo}</Link>
        </div>
    )
}

export default productCard
