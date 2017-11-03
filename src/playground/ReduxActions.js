// Use Actions 
// Action is an object that gets sent to the store/ 
//    - descirbes the tyoe of Action we'd like to take. 


import { createStore } from 'redux'

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT' :
      return {
        count: state.count + 1
      }
    case 'DECREMENT': 
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        count: state.count = 0
      }
    default:
      return state
  }

  // if (action.type === 'INCREMENT') {
  //   return {
  //     count: state.count + 1
  //   }
  // } else {
  //   return state
  // }
})            

console.log(store.getState())

// Increment the count
store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'INCREMENT'
})

// Reset the Count
store.dispatch({
  type: 'RESET'
})

// Decrement the count
store.dispatch({
  type: 'DECREMENT'
})

console.log(store.getState())