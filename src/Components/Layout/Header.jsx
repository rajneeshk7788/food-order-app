import React from 'react'
import mealseImage from '../../assets/meals.jpeg'
import './Header.css'
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
    <header className='header'>
      <h1>React Meal</h1>
     <HeaderCartButton onClick={props.onShowCard}/>
    </header>
    <div className='main-image'>
      <img src={mealseImage} alt="" />
    </div>
    </>
  )
}

export default Header