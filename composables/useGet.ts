import { _AsyncData } from "nuxt/dist/app/composables/asyncData";

export const useGet = async (
  url: string,
  query: Record<string, string>,
  options?: Record<string, string>
) => {
  return await useFetch(url, {
    ...options,
    baseURL: useBaseUrl(),
    method: "get",
    query,
  });
};
