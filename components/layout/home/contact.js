const ContactBoxs = (props) => {
    return (
        <section className="section-padding">
            <div className="contact-boxs">
                <ContactBox
                    bgImg={props.bgImg}
                    bgImgAlt={props.bgImgAlt}
                    styleClass="store-location">
                    <h3>Visit Us</h3>
                    <ul className="contact-box-location-list">
                        <li className="contact-box-location-item">Head Office</li>
                        <li className="contact-box-location-item">16 Boulevard Saint-Germain</li>
                        <li className="contact-box-location-item">75005 Paris</li>
                    </ul>
                    <a className="contact-box-link" href="#">Contact Us</a>
                </ContactBox>

                <ContactBox
                    bgImg={props.bgImg}
                    bgImgAlt={props.bgImgAlt}
                    styleClass="store-media">
                    <h3 className="contact-box-title">Follow Our Store Instagram</h3>
                    <a className="contact-box-link" href="#">@covidscape</a>
                </ContactBox>
            </div>
        </section>
    )
}

const ContactBox = (props) => {
    return (
        <div className={`contact-box ${props.styleClass}`}>
            <div className="contact-box-container">
                <div className={`contact-box-overlay ${props.overlayClass}`}></div>
                <img src={props.bgImg} className="contact-box-img" alt={props.bgImgAlt} />
                <div className="contact-box-content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default ContactBoxs