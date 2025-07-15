import React from 'react'

type LinkProps = {
    name:string,
    path:string
}

const Link = ({path,name}:LinkProps) => {
  return (
    <a href={path}>{name}</a>
  )
}

export default Link