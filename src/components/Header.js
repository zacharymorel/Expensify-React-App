import React from 'react'

//  Child
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

// Passing Deafult Props after Component is Defined. 
Header.defaultProps = {
  title: 'Indecision'
}

export default Header