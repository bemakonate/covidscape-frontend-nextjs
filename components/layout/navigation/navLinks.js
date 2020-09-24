import React from 'react';
import Link from 'next/link';



const data = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Shop',
        link: '/products',
    },
    {
        label: 'Blog',
        link: '/'
    }
]
const navLinks = (props) => {
    return (
        <ul className={props.styleClass}>
            {data.map((item, index) => {
                return <li onClick={props.click} key={`navLink-${index}`}>
                    <Link href={item.link} ><a className={props.navLinkClass}>{item.label}</a></Link>
                </li>
            })}
        </ul>
    )
}

export default navLinks
