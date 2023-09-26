import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const resourcesApi = createApi({
	reducerPath: "resourcesApi",
	baseQuery: fetchBaseQuery({baseUrl: "https://api.it-test.uz/v1/"}),
	endpoints: (build) => ({
		getDeliveryData: build.query({
			query: () => "resources"
		}),
	})
})

export const {useGetDeliveryDataQuery} = resourcesApi