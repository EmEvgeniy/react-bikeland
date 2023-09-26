import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const FormApi = createApi({
	reducerPath: "FormApi",
	baseQuery: fetchBaseQuery({baseUrl: "https://api.it-test.uz/v1/"}),
	endpoints: (build) => ({
		getPostForm: build.query({
			query: () => "feedbacks"
		}),
		postForm: build.mutation({
			query: (payload) => ({
				url: "feedbacks",
				method: "POST",
				body: payload
			})
		}),
		postForm2: build.mutation({
			query: (payload) => ({
				url: "orders",
				method: "POST",
				body: payload
			})
		}),

	})
})

export const {usePostFormMutation, usePostForm2Mutation} = FormApi