// 全局属性变量
const state = {
    login: window.sessionStorage.getItem('islogin'),
    token: window.sessionStorage.getItem('token'),
    num: 10,
    price: 10,
    showToast: false,
    toastText: '123'
}

export default state
