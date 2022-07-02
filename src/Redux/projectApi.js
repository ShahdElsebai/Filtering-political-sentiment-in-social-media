import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://localhost:7160',
})

export const projectApi = createApi({
        reducerPath: 'project-api',
        baseQuery,
        tagTypes: ['Posts'],
        endpoints: builder => ({
            getSentenceAnalysis: builder.mutation({
                query: (input) => ({
                    url: `MachineLearning?input=${input}`,
                    method: 'GET',
                }),
                invalidatesTags: ['Posts'],
            }),
    }),
    }
)

export const {useGetSentenceAnalysisMutation} = projectApi