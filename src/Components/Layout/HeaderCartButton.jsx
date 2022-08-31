import React,{useContext} from 'react'
import CartContext from '../../Store/CartContext'
import CartIcon from '../Cart/CartIcon'
import './HeaderCartButton.css'

const HeaderCartButton = props => {
  const cartCxt= useContext(CartContext)

  const numberOfCartItems=cartCxt.items.reduce((curNumber, item)=>{
    return curNumber+item.amount
  },0);

  

  return (
    <button className='button' onClick={props.onClick}>
        <span className='icon'><CartIcon/></span>
        <span>Your Cart</span>
        <span className='badge'>{numberOfCartItems}</span>
        
    </button>
  )
}

export default HeaderCartButton