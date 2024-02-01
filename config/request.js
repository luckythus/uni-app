// 统一错误处理
const errorHandle = (err) => {
    if (err.statusCode === 401) {
        // 4、业务上 -> refreshToken机制 -> 当请求响应回来状态码显示401时 -> 刷新token

    } else {
        // const { data: {msg}} = err
        uni.showToast({
            icon: 'none',
            title: '请求异常，请重试' || msg,
            duration: 2000
        });
    }
}

// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = (vm) => {
    // 初始化请求配置
    uni.$u.http.setConfig((config) => {
        /* config 为默认全局配置*/
        config.baseURL = 'https://www.baidu.com'; /* 根域名 */
        return config
    })

    // 请求拦截
    uni.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
        // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
        // config.data = config.data || {}
        // console.log(config)
        // // 根据custom参数中配置的是否需要token，添加对应的请求头
        // if (config?.custom?.auth) {
        //     // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
        //     config.header.token = vm.$store.state.userInfo.token
        // }
        const {url} = config
        uni.showLoading({
            title: '加载中'
        });
        const publicPath = [/\/public/,/\/login/]
        let isPublic = false
        publicPath.forEach(item => {
            isPublic = isPublic || item.test(url)
        })
        const token = uni.getStorageSync('token')
        if(!isPublic) {
            config.header = Object.assign({},{
                Authorization: 'Bearer ' + token   
            },config.header)
        }
        return config
    },async config => { // 可使用async await 做异步操作
        errorHandle(config)
        return await Promise.reject(config)
    })

    // 响应拦截
    uni.$u.http.interceptors.response.use((response) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
        // const data = response.data
        // // 自定义参数
        // const custom = response.config?.custom
        // if (data.code !== 200) {
        //     // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
        //     if (custom.toast !== false) {
        //         uni.$u.toast(data.message)
        //     }

        //     // 如果需要catch返回，则进行reject
        //     if (custom?.catch) {
        //         return Promise.reject(data)
        //     } else {
        //         // 否则返回一个pending中的promise，请求不会进入catch中
        //         return new Promise(() => { })
        //     }
        // }
        // return data.data === undefined ? {} : data.data
        uni.hideLoading();
        if(response.statusCode >= 200 && response.statusCode < 300) {
            return Promise.resolve(response.data)
        }
    }, (response) => {
        // 对响应错误做点什么 （statusCode !== 200）
        // console.log('get的请求失败的错误处理');
        errorHandle(response)
        return Promise.reject(response)
    })
}
