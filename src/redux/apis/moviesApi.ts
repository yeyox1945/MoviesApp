// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesResponse } from '../../models/moviesResponse';


export const moviesApi = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGExNzE5M2IyNGQ3OWFjMGJlMWI1YzdkNWY1YmM1YiIsInN1YiI6IjVkNWQ1ZGM1YzQ5MDQ4MDAxNTdkYWY3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aiPOJT-n7e46hbjNa1cnhiBtK0hcCMZ-Ixh152NObfI'
        }
    }),

    endpoints: (builder) => ({
        getNowPlaying: builder.query<MoviesResponse, number>({
            query: (page) => `/movie/now_playing?page=${page}`,
            // Only have one cache entry because the arg always maps to one string
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            // Merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                currentCache.results.push(...newItems.results);
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
        }),
    }),
})

export const { useGetNowPlayingQuery } = moviesApi;