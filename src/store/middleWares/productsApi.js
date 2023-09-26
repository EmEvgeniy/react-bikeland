import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({baseUrl: "https://api.it-test.uz/v1/"}),
	endpoints: (build) => ({
		getProducts: build.query({
			query: () => "products?status_id=4"
		}),
	})
})

export const {useGetProductsQuery} = productsApi