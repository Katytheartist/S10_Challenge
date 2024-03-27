import { configureStore } from '@reduxjs/toolkit'
import pizzaReducer from './pizzaSlice'
import {pizzaApi} from './pizzaApi'
import pizzaSlice from './pizzaSlice'

// const exampleReducer = (state = { count: 0 }) => {
//   return state
// }

export const resetStore = () =>  configureStore({
  reducer: {
    pizzaSlice: pizzaReducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
  },
 
     middleware: getDefault=> getDefault()
   .concat(pizzaApi.middleware)
  //   // if using RTK Query for your networking: add your middleware here
  //   // if using Redux Thunk for your networking: you can ignore this
  
})

//resetStore = () => 
export const store = resetStore()
