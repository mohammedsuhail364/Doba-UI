import React from 'react'
import '../Css_files/Item.css'
export const Items = ({image,name,price,className}) => {
  return (
    <div className={className}>
              <img src={image} alt="" />
              <p>{name}</p>
              <p>{price}</p>
    </div>
  )
}
