import React from 'react'

//  Child
const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
)

// Passing Deafult Props after Component is Defined. 
Header.defaultProps = {
  title: 'Indecision'
}

export default Header