import api from './apiConfig'

export const getAllComments = async () => {
  const resp = await api.get('/comments')
  return resp.data
}

export const addComment = async (postId, commentId) => {
  const resp = await api.put(`/posts/${postId}/comments/${commentId}`)
  return resp.data
}