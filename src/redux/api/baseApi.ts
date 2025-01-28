import {
	BaseQueryApi,
	BaseQueryFn,
	createApi,
	DefinitionType,
	FetchArgs,
	fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";
import { logOut, setUser } from "../features/auth/authSlice";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:5000/api",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.token;

		if (token) {
			headers.set("authorization", `${token}`);
		}

		return headers;
	},
});

const baseQueryWithRefreshToken: BaseQueryFn<
	FetchArgs,
	BaseQueryApi,
	DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
	let result = await baseQuery(args, api, extraOptions);

	if (result?.error?.status === 404) {
		const errorMessage = (result.error.data as { message: string }).message;
		toast.error(errorMessage);
	}

	if (result?.error?.status === 401) {
		// Send refresh token
		const res = await fetch("http://localhost:5000/api/auth/refresh-token", {
			method: "POST",
			credentials: "include",
		});

		const data = await res.json();

		if (data?.data?.accessToken) {
			const user = (api.getState() as RootState).auth.user;

			api.dispatch(
				setUser({
					user,
					token: data.data.accessToken,
				})
			);

			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}

	return result;
};

export const baseApi = createApi({
	reducerPath: "baseApi",
	baseQuery: baseQueryWithRefreshToken,
	tagTypes: ["semester", "courses"],
	endpoints: () => ({}),
});
