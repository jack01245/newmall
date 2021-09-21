import {ADD_CART, ADD_COUNTER} from "@/store/mutations-type";

export default {
  // 最终方案
  // 增加商品数量
  [ADD_COUNTER](state, payload) {
    payload.counter += 1
  },
  // 添加购物车
  [ADD_CART](state, payload) {
    payload.counter = 1
    payload.checked = true
    state.cartList.push(payload)
  },


  addToCart(state, payload) {
    // state.cartList.push(payload)
    // 1.判断数组中是否含有该商品
    // 方式一
    // let oldProduct = null
    // for (let item of state.cartList) {
    //   if (item.iid === payload.iid) {
    //     oldProduct = item
    //   }
    // }
    // 2.当有商品时，数量加一，没有商品时，加入该商品
    // if (oldProduct) {
    //   oldProduct.counter += 1
    // } else {
    //   payload.counter = 1
    //   state.cartList.push(payload)
    // }
    // 方式二
    // find没有返回undefined有返回数组中的那个item
    // let oldProduct = state.cartList.find(function (item) {
    //   return item.iid === payload.iid
    // })
    // if (oldProduct) {
    //   oldProduct.counter += 1
    // } else {
    //   payload.counter = 1
    //   state.cartList.push(payload)
    // }
  }
}
