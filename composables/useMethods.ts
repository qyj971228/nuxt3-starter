export const useGet = async (
  url: string,
  query: Record<string, string>,
  options?: Record<string, string>
) => {
  return await useFetch(url, {
    ...options,
    baseURL: useBaseUrl(),
    method: 'get',
    query
  })
}

export const useDelete = async (
  url: string,
  query: Record<string, string>,
  options?: Record<string, string>
) => {
  return await useFetch(url, {
    ...options,
    baseURL: useBaseUrl(),
    method: 'delete',
    query
  })
}

export const usePost = async (
  url: string,
  body: Record<string, string>,
  options?: Record<string, string>
) => {
  return await useFetch(url, {
    ...options,
    baseURL: useBaseUrl(),
    method: 'post',
    body
  })
}

export const usePut = async (
  url: string,
  body: Record<string, string>,
  options?: Record<string, string>
) => {
  return await useFetch(url, {
    ...options,
    baseURL: useBaseUrl(),
    method: 'put',
    body
  })
}
