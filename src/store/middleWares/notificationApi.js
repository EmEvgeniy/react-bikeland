import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const notificationApi = createApi({
	reducerPath: "notificationApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.it-test.uz/v1/" }),
	endpoints: (build) => ({
		getNofications: build.query({
			query: () => "notifications",
		}),
		postNotification: build.mutation({
			query: (payload) => ({
				url: "notifications",
				method: "POST",
				body: payload,
			}),
		}),
	}),
});

export const { usePostNotificationMutation } = notificationApi;
