import React from 'react'

function IconComponent({icon, iconSize, styling}) {

    if(!icon) {
        console.error(`Error icon was not Provided: ${icon}`);
        return null; 
    }

  return React.createElement(icon,{
    style:{width:`${4 * iconSize}px`, height:`${4 * iconSize}px`},
    className:styling

  })
}

export default IconComponent