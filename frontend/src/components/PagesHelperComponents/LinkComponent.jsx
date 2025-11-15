import React from 'react'
import {Link} from "react-router-dom"

function LinkComponent({href, styling , linkText}) {
  return (
    <Link to={href} className={styling}>
        {linkText}
    </Link>
  )
}

export default LinkComponent