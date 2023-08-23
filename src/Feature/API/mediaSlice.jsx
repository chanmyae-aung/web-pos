import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

// Get the token from the cookie
const token = Cookies.get('token');

export const api = createApi({
  reducerPath:'mediaSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://b.mmsdev.site/api/v1' , prepareHeaders: (headers) => {
    // Include the token in the headers if it exists
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },}), 
  
  provideTags:["mediaSlice"],
  endpoints: (builder) => ({
    getMedia: builder.query({
      query: () => 'media',
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