import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://localhost:7160',
})

export const projectApi = createApi({
        reducerPath: 'project-api',
        baseQuery,
        tagTypes: ['Posts'],
        endpoints: builder => ({
            // getSentenceAnalysis: builder.query({
            //     query:(input)=>({
            //         url:`MachineLearning?input=${input}`,
            //         method: 'GET'
            //     }),
            //     providesTags: [ 'Posts' ],
            // })
            getSentenceAnalysis: builder.query({
            query: (input) => `MachineLearning?input=${input}`,
        }),
    }),
    }
)

export const {useGetSentenceAnalysisQuery} = projectApi