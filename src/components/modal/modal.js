import Vue from 'vue'
import Message from './modal.vue'

const messageBox = Vue.extend(Message)
var instance = {}

Message.install = function(options, callback) {
    if (options === undefined || options === null) {
        options = {
            text: ''
        }
    } else if (typeof options === 'string' || typeof options === 'number') {
        options = {
            text: options
        }
    }
    
    if (!options.canfirmText) {
        options.canfirmText = store.state.language.confirm
    }
    if (!options.cancelText) {
        options.cancelText = store.state.language.cancel
    }
    
    options.return = store.state.language.return
    
    instance = new messageBox({
        data: options,
    }).$mount()

    document.body.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.showMessage = true;
        document.querySelector('body').style.overflow = 'hidden'
    })
}

Message.close = function() {
    if (instance.showMessage) {
        instance.closeSelf();
    }
}

export default Message
