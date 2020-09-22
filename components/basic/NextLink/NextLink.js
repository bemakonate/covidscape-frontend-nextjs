import React from 'react'
import Link from 'next/link'
const NextLink = (props) => {
    return (
        <Link href={props.href} as={props.as}><a className={props.className}>{props.children}</a></Link>
    )
}

export default NextLink
