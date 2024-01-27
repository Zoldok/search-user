import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    getUsersDesc: builder.query({
      query: ({userName, pages}) =>
        `search/users?q=${userName}&sort=repositories&order=desc&page=${pages ? pages : 1}`,
    }),
    getUsersAsc: builder.query({
      query: ({userName, pages}) =>
        `search/users?q=${userName}&sort=repositories&order=asc&page=${pages ? pages : 1}`,
    }),
  }),
})

export const {  useGetUsersDescQuery, useGetUsersAscQuery } =
  Api
