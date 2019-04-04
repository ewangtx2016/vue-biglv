import vueBiglv from './vue-biglv.vue'

const biglv = {
    install(Vue, options){
        Vue.component(vueBiglv.name ,vueBiglv)
    }
}

export default biglv //导出插件