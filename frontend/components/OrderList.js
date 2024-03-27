import React, {useState} from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import {setFilters} from '../state/pizzaSlice'
import { useGetOrdersQuery } from '../state/pizzaApi'

export default function OrderList() {
   const {data: orders = [], isLoading: ordersLoading, isFetching: ordersRefreshing} = useGetOrdersQuery()
  //  const [activeSize, setActiveSize] = useState('All')
  console.log(orders)
  // const ordersList = { "fullName": "Jane Doe", "size": "L", "toppings": ["1","2","3","4","5"] }
  const activeSize = useSelector(st => st.pizzaSlice.activeSize)
  const dispatch = useDispatch()
  // const handleFilterClick = (size) =>{
  //   setActiveSize(size)
  // }

  const filteredSize = orders && activeSize !== 'All' ? orders.filter(or => or.size == activeSize):orders

  return (
    <div id="orderList">
      <h2>Pizza Orders
        {ordersLoading || ordersRefreshing && 'loading...'}
      </h2>
      <ol>
        {
          orders && filteredSize?.map((or) => {
            
            return (
              <li key={or.id}>
                <div>
                  {or.customer} ordered a size {or.size} with {
                  !or.toppings || or.toppings.length === 0
                  ? 'No toppings'
                  : or.toppings.length === 1
                  ? '1 topping'
                  : `${or.toppings.length} toppings`
  }
                </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map((size, index) => {
            const className = `button-filter${size === activeSize ? ' active' : ''}`
            return <button
              onClick={()=>dispatch(setFilters(size))}
              data-testid={`filterBtn${size}`}
              className={className}
              key={index}>{size}</button>
          })
        }
      </div>
    </div>
  )
}
