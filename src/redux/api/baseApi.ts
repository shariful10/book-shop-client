import { apiUrl } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: `${apiUrl}/api`,
		credentials: "include",
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).auth.token;

			if (token) {
				headers.set("authorization", `${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["semester", "courses"],
	endpoints: () => ({}),
});
