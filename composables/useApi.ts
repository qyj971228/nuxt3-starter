import { _AsyncData } from "nuxt/dist/app/composables/asyncData";

export const useApi = () => {
  return {
    shoppingGoods: async (id: any) =>
      await useGet("/biz/app/shoppingGoods/" + id, {}),
    shoppingGoods1: async (id: any) =>
      await useGet("/biz/app/shoppingGoods/" + id, {}),
    shoppingGoods2: async (id: any) =>
      await useGet("/biz/app/shoppingGoods/" + id, {}),
  };
};
