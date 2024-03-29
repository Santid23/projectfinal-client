import { Link } from "@chakra-ui/react"
import { Link as ReactRouterLink } from "react-router-dom"

import React from "react"

// { children, ...props}  => entre Link => {children}

const CustomLink = ({ children, ...props}) => {
  return <Link {...props} as={ReactRouterLink}> 
  {children}
  </Link>
}

export default CustomLink
