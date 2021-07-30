//引入pay.vue
import vpay from "./pay"

//定义插件
const myPlugin = {
    /**
     * install方法
     * @param Vue 第一个参数是传入的vue
     * @param options 第二个参数是插件的自定义参数
     */
    install(Vue,options){
        Vue.component("vpay",vpay)
    }
}

//最后将插件导出，并在main.js中通过Vue.use()即可使用插件
export default myPlugin
