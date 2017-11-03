// Use Actions 
// Action is an object that gets sent to the store/ 
//    - descirbes the tyoe of Action we'd like to take. 
// Action Generators - functions that return action Objects


import { createStore } from 'redux'


// const add = ({a ,b }, c) => {
//   return a + b + c
// }
// console.log(add({ a:1, b:12 }, 100))


// -------- ACTION GENERATORS ------------
const incrememntCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
})

const resetCount = ({ resetCount = 0 } = {}) => ({
  type: 'RESET',
  resetCount: resetCount
})

const setCount = ({}) => ({
  type: 'SET',
  setCount: setCount
})


const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT' :
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: action.resetCount
      }
    default:
      return state
  }
})            

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())

})


store.dispatch(incrememntCount({ incrementBy: 5 }))

store.dispatch(incrememntCount())

// Reset the Count
store.dispatch(resetCount())

// Decrement the count
store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))


store.dispatch({setCount: 200})

store.dispatch({
  type: 'SET',
  count: 101
})
