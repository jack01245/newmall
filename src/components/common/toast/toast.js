//创建一个组件构造器
import Toast from "./Toast.vue";

const obj = {}

obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //2.new的方式，根据组件构造器，创建一个组件对象
  const toast = new toastContrustor()
  //3.将组建对象手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4.toast.$el对应的就是我们上面创建的div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}


export default obj
