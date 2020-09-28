import React from 'react';

const aspectRatio = ({ height, children, styleClass }) => {
    return (
        <div height={height} className={styleClass}>
            <div className='aspectRatio__wrapper'>
                <div className='aspectRatio__container'>
                    {children}
                </div>
            </div>
            <style jsx>
                {`
                  .aspectRatio__wrapper {
                    position: relative;
                    width: 100%;
                    /* margin-bottom: 10px; */
                }
            
                .aspectRatio__wrapper:after {
                    content: "";
                    display: block;
                    padding-bottom: ${height || '56.4%'};
                }
            
                .aspectRatio__container {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                `}

            </style>
        </div>
    )
}

export default aspectRatio
