import {createSlice} from '@reduxjs/toolkit'

// let id = 1
// const getNextId = () => id++

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
    size: 'All',
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setFilters(state, action) {
            if (state.size === action.payload) {
              state.size = null
            } else {
              state.size = action.payload
            }
          },
       }
})

export const {
    setFilters,
} = pizzaSlice.actions

export default pizzaSlice.reducer