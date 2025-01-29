import { baseApi } from "@/redux/api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllUsers: builder.query({
			query: () => ({
				url: "/users",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetAllUsersQuery } = userManagementApi;
