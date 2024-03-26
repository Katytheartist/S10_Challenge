import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const pizzaApi = createApi({
    reducerPath: 'pizzaApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:9009/api/',
        tagTypes: ['Orders']
    }),
    endpoints: builder=>({
        getOrders: builder.query({
            query: ()=> 'pizza/history',
            providesTags: ['Orders']
        }),
        createOrder: builder.mutation({
            query: order =>({
                url: 'pizza/order',
                method: 'POST',
                body: order,
            }),
            invalidatesTags: ['Orders']
        })
    })
})

export const {
    useGetOrdersQuery, useCreateOrderMutation
} = pizzaApi