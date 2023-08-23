import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath:'mediaSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://b.mmsdev.site/api/v1' }), 
  tagTypes:["mediaSlice"],// Your API base URL here
  endpoints: (builder) => ({
    getMedia: builder.query({
      query: () => 'media', // The endpoint for fetching media data
    }),
    uploadMedia: builder.mutation({
      query: ({photos,token}) => ({
        url: 'media', // The endpoint for uploading media
        method: 'POST',
        body: photos, 
        headers:{authorization:`Bearer ${token}`}// The file data you want to upload
      
      }),
      invalidatesTags:["mediaSlice"]
    }),
  }),
});

export const { useGetMediaQuery, useUploadMediaMutation } = api;