import {ADD_CART, ADD_COUNTER, ADD_TO_CART} from "@/store/mutations-type";

export default {
  [ADD_TO_CART](context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(function (item) {
        return item.iid === payload.iid
      })
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('商品数量+1')
      } else {
        context.commit(ADD_CART, payload)
        resolve('添加购物车成功')
      }
    })

  }
}
