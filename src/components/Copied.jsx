import React from 'react'
import { getContrastYIQ } from '../helpers'

export default function Copied({ color }) {
  return (
    <div style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}} className='copied'>
        <div><span>Copied </span> <strong> {color} </strong> <span>to clipboard</span></div>
    </div>
  )
}
