import React from 'react'
import './Button.css'

function Button() {
  return (
    <div className='FirstButton'>
        <button className='customOrder'>Custom Order</button>
        <button className='Existing'>Existing Inventory</button>
    </div>
  )
}

export default Button