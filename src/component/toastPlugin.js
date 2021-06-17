import Toast from '/src/component/toast'

let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, propsData) {
            if (currentToast) {
                currentToast.closeToast()
            }
            currentToast = createToast({
                Vue, message, propsData, onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}

function createToast({Vue, message, propsData, onClose}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = message
    toast.$mount()

    toast.$on('toastClose', onClose)
    document.body.appendChild(toast.$el)
    return toast
}