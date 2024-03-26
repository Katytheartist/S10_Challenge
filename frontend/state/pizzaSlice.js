import {createSlice} from '@reduxjs/toolkit'

let id = 1
const getNextId = () => id++

const initialState = {

    // ordersList: [{
    //     "id": 1,
    //     "customer": "Sigourney Weaver",
    //     "size": "S",
    //     "toppings": [
    //         "Pepperoni",
    //         "Pineapple"
    //     ]
    // }],
    filters: 'All',
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            if (state.size === action.payload) {
              state.size = null
            } else {
              state.size = action.payload
            }
          },
        createOrder: {
          prepare(customer, size){
            return {
              payload:{id: getNextId(), 
                customer, 
                size}
            }
          }, reducer(state, action){
            state.orders.push(action.payload)
          }
        }
       }
})

export const {
    setFilters,
} = pizzaSlice.actions

export default pizzaSlice.reducer