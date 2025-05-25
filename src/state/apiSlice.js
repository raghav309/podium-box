import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/podcast' }),
    endpoints: (builder) => ({
        getTrending: builder.query({
            query: () => '/trending',
        }),
        getChannelByFeedId: builder.query({
            query: (feedId) => `/channel/byfeedid?feedid=${feedId}`,
        }),
    }),
});

export default apiSlice;
export const { useGetTrendingQuery, useGetChannelByFeedIdQuery } = apiSlice;
