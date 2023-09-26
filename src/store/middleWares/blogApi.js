import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
	reducerPath: "blogApi",
	baseQuery: fetchBaseQuery({baseUrl: "https://api.it-test.uz/v1/"}),
	endpoints: (build) => ({
		getBlog: build.query({
			query: () => "blogs"
		}),
	})
})

export const {useGetBlogQuery} = blogApi