export const useGet = async (
  url: string,
  query: Record<string, string>,
  options?: Record<string, string>
) => {
  return await useFetch(url, {
    ...options,
    baseURL: useBaseUrl().value,
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
    baseURL: useBaseUrl().value,
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
    baseURL: useBaseUrl().value,
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
    baseURL: useBaseUrl().value,
    method: 'put',
    body
  })
}
