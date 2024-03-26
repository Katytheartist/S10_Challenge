import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import {setFilters} from '../state/pizzaSlice'
import { useGetOrdersQuery } from '../state/pizzaApi'

export default function OrderList() {
  // const {data: orders, isLoading: ordersLoading, isFetching: ordersRefreshing} = useGetOrdersQuery()
  console.log(data)
  // const ordersList = { "fullName": "Jane Doe", "size": "L", "toppings": ["1","2","3","4","5"] }
  const size = useSelector(st => st.filters)
  const dispatch = useDispatch()
  return (
    <div id="orderList">
      <h2>Pizza Orders
        {ordersLoading || ordersRefreshing && 'loading...'}
      </h2>
      <ol>
        {
          orders.map((or) => {
            return (
              <li key={or.size}>
                <div>
                  order details here
                </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const className = `button-filter${size === 'All' ? ' active' : ''}`
            return <button
              onClick={()=>dispatch(setFilters(size))}
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}>{size}</button>
          })
        }
      </div>
    </div>
  )
}
