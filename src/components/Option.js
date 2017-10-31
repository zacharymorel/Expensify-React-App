import React from 'react'

//  Child to Options
const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
        >Remove</button>
    </div>
  )
}

export default Option