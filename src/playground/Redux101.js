import { createStore } from 'redux'
//          ^ Create Store Function of Redux 
const store = createStore((state = { count: 0 }) => {
  return state
})            
//                 ^
// Create Store function takes 2 params, 1st a function / Creates the state/ needs default state object. 

console.log(store.getState())
//                ^fetch the current state snd returns object