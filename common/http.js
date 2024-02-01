// 封装request
// 请求接口地址的基础路径
const BASE_URL = ''
// 需求分析
// 1、在头部请求的时候，token带上 -> 请求拦截器
// 2、在响应数据的时候，处理data数据
// 3、对错误进行统一的处理 -> showToast
// 4、业务上 -> refreshToken机制 -> 当请求响应回来状态码显示401时 -> 刷新token

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


// options为用户请求设置的一些选项，如果没有则默认空对象
export const request = (options = {}) => {
    // 解构出用户设置的选项的成功和失败处理函数(如果有)
    const { success, fail, url } = options
    // 展示Loading效果
    uni.showLoading({
        title: '加载中'
    });
    // 1、在头部请求中，判断是否是public或login路径，是否获取携带token
    const publicPath = [/\/public/, /\/login/]
    let isPublic = false
    publicPath.forEach(path => {
        isPublic = isPublic || path.test(options.url)
    })
    // 调用uni.getStorageSync()方法获取token
    const token = uni.getStorageSync('token')
    // 判断isPublic的真假和token是否存在，来判断请求头部是否需要携带token
    if (!isPublic && token) {
        // 如果路径不是那两个和token已存在，则需要在头部中携带token
        // 由于原始头部没有Authorization，需要调用Object.assign拼接属性
        options.header = Object.assign({}, {
            Authorization: 'Bearer ' + token,
        }, options.header)

    }
    // 返回Promise对象，里面发起请求
    return new Promise((resolve, reject) => {
        uni.request(Object.assign({}, options, {
            url: BASE_URL + url,
            success: (res) => {
                uni.hideLoading();
                // 成功后的函数，响应拦截器
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    if (success && typeof success === 'function') {
                        // 如果用户预设了成功处理函数，则直接调用返回
                        success(res.data)
                        return
                    }

                    // 请求成功后，在响应时候处理data
                    resolve(res.data)
                } else {
                    uni.hideLoading();
                    // 如果状态码不在这区间则说明请求异常，失败
                    errorHandle(res)
                    // 返回失败结果
                    reject(res)
                }

            },
            fail: (err) => {
                uni.hideLoading();
                if (fail && typeof fail === 'function') {
                    fail(err)
                    return
                }
                errorHandle(err)
                reject(err)
            }

        }))
    })
}