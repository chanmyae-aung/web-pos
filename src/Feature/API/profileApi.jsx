import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://b.mmsdev.site/api/v1" }),
  tagTypes: ["profileApi"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (token) => ({
        url: `/profile`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["profileApi"],
    }),
    createUser: builder.mutation({
      query: ({ token, userData }) => ({
        url: "/register",
        method: "POST",
        body: userData,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["profileApi"],
    }),
    getSingleUser: builder.query({
      query: ({ token, id }) => ({
        url: `/users/${id}`,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["profileApi"],
    }),
    updateUser: builder.mutation({
      query: ({ token, id }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: updateUserData,
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["profileApi"],
    }),
    deleteUser: builder.mutation({
      query: ({ token, id }) => ({
        url: `/users/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["profileApi"],
    }),
    
  }),
});

export const {
  useGetProfileQuery,
} = profileApi;
