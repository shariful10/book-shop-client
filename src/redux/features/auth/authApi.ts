import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		login: build.mutation({
			query: (body) => ({
				url: "/auth/login",
				method: "POST",
				body,
			}),
		}),
		register: build.mutation({
			query: (body) => ({
				url: "/users/create-user",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
