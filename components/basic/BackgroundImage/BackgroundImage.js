import classes from './BackgroundImage.module.scss';

const BackgroundImage = (props) => {
    const { image, children, compClass } = props;
    return (
        <div className={`${classes.BgImageComp} ${compClass}`}>
            <img src={image} alt="" className={classes.BgImage} />
            {children}
        </div>
    )
}

export default BackgroundImage
