export const useApi = () => {
  return {
    shoppingGoods: async (id: any) => await useGet('/biz/app/shoppingGoods/' + id, {}),
    shoppingGoods1: async (id: any) => await usePost('/biz/app/shoppingGoods/' + id, {})
  }
}
