import React from 'react'
import Link from 'next/link'
const NextLink = ({ className, children, ...props }) => {
    return (
        <Link {...props}><a className={className}>{children}</a></Link>
    )
}

export default NextLink
