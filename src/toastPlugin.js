import Toast from '/src/component/toast'

let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, propsData) {
            if (currentToast) {
                currentToast.remove()
            }
            currentToast = createToast({Vue, message, propsData})
        }
    }
}

function createToast({Vue, message, propsData}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = message
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}