import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://648ed67c75a96b66444457c1.mockapi.io";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query(comment) {
        return {
          url: API_ENDPOINT,
          method: "POST",
          body: comment,
        };
      },
      invalidatesTags: ["Comments"],
    }),

    updateCommentCount: builder.mutation({
      query({ id, ...body }) {
        return {
          url: `${API_ENDPOINT}/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useUpdateCommentCountMutation,
} = commentApi;

//   addPost: build.mutation({
//     query(body) {
//       return {
//         url: `posts`,
//         method: 'POST',
//         body,
//       }
//     },
//     invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
//   }),
// }),
