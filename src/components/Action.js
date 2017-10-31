import React from 'react'

//  Child
const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
      What Should I do?
      </button>
    </div>
  )
}

export default Action 