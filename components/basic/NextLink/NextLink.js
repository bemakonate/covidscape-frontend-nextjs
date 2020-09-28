import React from 'react'
import Link from 'next/link'
const NextLink = ({ className, children, ariaLabel, ...props }) => {
    return (
        <Link {...props}><a className={className} aria-label={ariaLabel}>{children}</a></Link>
    )
}

export default NextLink
