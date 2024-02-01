<template>
    <view class="home">
        <view class="usticky">
            <!-- 搜索框 -->
            <search @click="gotoSearch()"></search>

            <!-- 导航栏 -->
            <u-sticky bgColor="#fff">
                <u-tabs :list="list1" :scrollable="true" lineWidth="30" :activeStyle="{
                    fontWeight: 'bold',
                    color: '#02D199',
                    transform: 'scale(1.05)'
                }" @change="change"></u-tabs>
            </u-sticky>
        </view>
        <view class="content" :style="{ 'padding-top': offsetTop + 'px' }">
            <div class="wrapper">
                <!-- 首页的列表 -->
                <view class="list-item">
                    <!-- 头部标题部分 -->
                    <view class="list-head">
                        <text class="type type-share">分享</text>
                        <text class="title">大前端111111
                        </text>
                    </view>
                    <!-- 用户部分 -->
                    <view class="author">
                        <u--image class="uimage" :showLoading="true" src="/static/images/about.png" width="20" height="20"
                            @click="click" erronIcon="/static/images/header.jpg"></u--image>
                        <text class="username">toimc用户</text>
                    </view>


                    <!-- 摘要部分 + 右侧图片 -->
                    <view class="list-body">
                        <view class="info">
                            我是Brain，这是前端小程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这
                        </view>
                        <image class="fmt" src="/static/images/appicon.png" mode="aspectFill" />
                    </view>

                    <!-- 回复 + 文章发表的时间 -->
                    <view class="list-footer">
                        <view class="left">
                            <text class="reply-num">0 回复</text>
                            <text class="time">2023-6-28</text>
                        </view>
                    </view>
                </view>
                <view class="list-item">
                    <!-- 头部标题部分 -->
                    <view class="list-head">
                        <text class="type type-share">分享</text>
                        <text class="title">大前端111111
                        </text>
                    </view>
                    <!-- 用户部分 -->
                    <view class="author">
                        <u--image class="uimage" :showLoading="true" src="/static/images/about.png" width="20" height="20"
                            @click="click" erronIcon="/static/images/header.jpg"></u--image>
                        <text class="username">toimc用户</text>
                    </view>


                    <!-- 摘要部分 + 右侧图片 -->
                    <view class="list-body">
                        <view class="info">
                            我是Brain，这是前端小程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这
                        </view>
                        <image class="fmt" src="/static/images/appicon.png" mode="aspectFill" />
                    </view>

                    <!-- 回复 + 文章发表的时间 -->
                    <view class="list-footer">
                        <view class="left">
                            <text class="reply-num">0 回复</text>
                            <text class="time">2023-6-28</text>
                        </view>
                    </view>
                </view>
                <view class="list-item">
                    <!-- 头部标题部分 -->
                    <view class="list-head">
                        <text class="type type-share">分享</text>
                        <text class="title">大前端111111
                        </text>
                    </view>
                    <!-- 用户部分 -->
                    <view class="author">
                        <u--image class="uimage" :showLoading="true" src="/static/images/about.png" width="20" height="20"
                            @click="click" erronIcon="/static/images/header.jpg"></u--image>
                        <text class="username">toimc用户</text>
                    </view>


                    <!-- 摘要部分 + 右侧图片 -->
                    <view class="list-body">
                        <view class="info">
                            我是Brain，这是前端小程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这
                        </view>
                        <image class="fmt" src="/static/images/appicon.png" mode="aspectFill" />
                    </view>

                    <!-- 回复 + 文章发表的时间 -->
                    <view class="list-footer">
                        <view class="left">
                            <text class="reply-num">0 回复</text>
                            <text class="time">2023-6-28</text>
                        </view>
                    </view>
                </view>
                <view class="list-item">
                    <!-- 头部标题部分 -->
                    <view class="list-head">
                        <text class="type type-share">分享</text>
                        <text class="title">大前端111111
                        </text>
                    </view>
                    <!-- 用户部分 -->
                    <view class="author">
                        <u--image class="uimage" :showLoading="true" src="/static/images/about.png" width="20" height="20"
                            @click="click" erronIcon="/static/images/header.jpg"></u--image>
                        <text class="username">toimc用户</text>
                    </view>


                    <!-- 摘要部分 + 右侧图片 -->
                    <view class="list-body">
                        <view class="info">
                            我是Brain，这是前端小程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这
                        </view>
                        <image class="fmt" src="/static/images/appicon.png" mode="aspectFill" />
                    </view>

                    <!-- 回复 + 文章发表的时间 -->
                    <view class="list-footer">
                        <view class="left">
                            <text class="reply-num">0 回复</text>
                            <text class="time">2023-6-28</text>
                        </view>
                    </view>
                </view>
                <view class="list-item">
                    <!-- 头部标题部分 -->
                    <view class="list-head">
                        <text class="type type-share">分享</text>
                        <text class="title">大前端111111
                        </text>
                    </view>
                    <!-- 用户部分 -->
                    <view class="author">
                        <u--image class="uimage" :showLoading="true" src="/static/images/about.png" width="20" height="20"
                            @click="click" erronIcon="/static/images/header.jpg"></u--image>
                        <text class="username">toimc用户</text>
                    </view>


                    <!-- 摘要部分 + 右侧图片 -->
                    <view class="list-body">
                        <view class="info">
                            我是Brain，这是前端小程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这程序我是Brain，这是前端小程序我是Brain，这
                        </view>
                        <image class="fmt" src="/static/images/appicon.png" mode="aspectFill" />
                    </view>

                    <!-- 回复 + 文章发表的时间 -->
                    <view class="list-footer">
                        <view class="left">
                            <text class="reply-num">0 回复</text>
                            <text class="time">2023-6-28</text>
                        </view>
                    </view>
                </view>
            </div>
        </view>
        <view class="bottom-line"></view>
    </view>
</template>

<script>
// import { request } from '@/common/http'
import { postMenu, getMenu } from '@/config/api.js';
import { Message } from '@/composables/util'
export default {
    components: {},
    data() {
        return {
            list1: [
                {
                    key: '',
                    name: '首页'
                },
                {
                    key: 'ask',
                    name: '提问'
                },
                {
                    key: 'share',
                    name: '分享'
                },
                {
                    key: 'discuss',
                    name: '讨论'
                },
                {
                    key: 'advise',
                    name: '建议'
                },
                {
                    key: 'notice',
                    name: '公告'
                },
                {
                    key: 'log',
                    name: '动态'
                }
            ],
            current: 0,
            offsetTop: 50
        }
    },
    // 挂载之前阶段
    beforeMount() {
    },
    computed: {},
    methods: {
        gotoSearch() {
            // 跳转到应用的分包页面
            uni.navigateTo({
                url: '/subcom-pkg/search1/search1'
            });
        },
        change(index) {
            this.current = index.index;
        },
        // 由于封装的request返回的是promise对象，所以调用async、await来接收
        // async test() {
        //     const result = await request({
        //         // 预设的设置，传给封装的request拦截器
        //         url: 'http://www.baidu.com23'
        //     }).then(res => {
        //         console.log(res)
        //     }).catch(err => {
        //         console.log("error:", err);
        //     })
        // }

    },
    mounted() {
        getMenu({ name: '周裕翔', id: '99' })
        .then((res) => {
            console.log('获取数据成功！' + res);
        })
        // .catch((error) => {
        //     Message('get请求失败，错误为：' + error)
        // })
    },
    watch: {},

    // 页面周期函数--监听页面加载
    onLoad() { },
    // 页面周期函数--监听页面初次渲染完成
    onReady() {
        const query = uni.createSelectorQuery().in(this)
        query.select('.usticky').boundingClientRect(rect => {
            this.offsetTop = rect.height
        }).exec()
    },
    // 页面周期函数--监听页面显示(not-nvue)
    onShow() { },
    // 页面周期函数--监听页面隐藏
    onHide() { },
    // 页面周期函数--监听页面卸载
    onUnload() { },
    // 页面处理函数--监听用户下拉动作
    // onPullDownRefresh() { uni.stopPullDownRefresh(); },
    // 页面处理函数--监听用户上拉触底
    // onReachBottom() {},
    // 页面处理函数--监听页面滚动(not-nvue)
    // onPageScroll(event) {},
    // 页面处理函数--用户点击右上角分享
    // onShareAppMessage(options) {},
} 
</script>

<style lang="scss" scoped>
.usticky {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 999;
}

.content {
    background-color: #f5f6f7;

    .wrapper {
        padding: 24rpx 0;
    }
}

.list-item {
    background: #fff;
    margin-bottom: 20rpx;
    padding: 30rpx
}

.list-head {
    margin-bottom: 18rpx;

    .type {
        display: inline-block;
        height: 36rpx;
        width: 72rpx;
        text-align: center;
        line-height: 36rpx;
        white-space: nowrap;
        margin-right: 10rpx;
        font-size: 24rpx;
        border-radius: 18rpx;
        border-bottom-left-radius: 0;
        color: #fff;
        background-color: red;
        position: relative;
        top: -4rpx;
        transform: scale(0.9)
    }

    .type-share {
        background-color: #feb21e;
    }

    .type-ask {
        background-color: #02d199;
    }

    .type-discuss {
        background-color: #fe1e1e;
    }

    .type-advise {
        background-color: #0166f8;
    }

    .type-notice {
        background-color: #00a3b8;
    }

    .type-logs {
        background-color: #33cb61;
    }

    .title {
        color: #333;
        font-size: 32rpx;
        line-height: 44rpx;
        font-weight: bold;
    }
}

.author {
    display: flex;
    margin-bottom: 10px;

    .uimage {
        display: inline-block;
    }

    .username {
        display: inline-block;
        margin-left: 5px;
        color: #666;
        font-size: 29rpx;
    }
}

.list-body {
    margin-bottom: 30rpx;
    display: flex;

    .info {
        margin-right: 20rpx;
        font-size: 28rpx;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .fmt {
        width: 165rpx;
        height: 119rpx;
        border-radius: 8rpx;
        flex-shrink: 0;
    }
}

.list-footer {
    color: #999;
    font-size: 24rpx;
    display: flex;

    .left {
        .reply-num {
            margin-right: 25rpx;
        }
    }
}
</style>