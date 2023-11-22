// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MoviesResponse } from '../../models/moviesResponse';


export const moviesApi = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_KEY}`
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
        getPopular: builder.query<MoviesResponse, number>({
            query: (page) => `/movie/popular?page=${page}`,
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
        getTopRated: builder.query<MoviesResponse, number>({
            query: (page) => `/movie/top_rated?page=${page}`,
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
        getUpcoming: builder.query<MoviesResponse, number>({
            query: (page) => `/movie/upcoming?page=${page}`,
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