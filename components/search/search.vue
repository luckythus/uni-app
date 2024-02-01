<template>
    <view class="search" :style="{ 'padding-top': barHeight + 'px' }" @click="$emit('click')">
        <view class="search-box">
            <u-icon name="search" color="#ccc" size="22" class="icon"></u-icon>
            <text>搜索社区内容</text>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            barHeight: 0
        }
    },
    // 挂载之前阶段
    beforeMount() {
        // 在挂载阶段去获取该信息
        this.getNavBarHeight()
    },
    computed: {},
    methods: {
        getNavBarHeight() {
            // 调用uni.getSystemInfo后，this会指向它回调函数自身，而不是指向Vue实例，保存指向Vue实例的this
            const self = this
            // 调用uni.getSystemInfo()动态获取该设备信息
            uni.getSystemInfo({
                // 成功后，res里面包含设备系统信息
                success: function (res) {
                    // console.log(res);
                    // 搜索组件往上偏移状态栏的高度
                    let statusBarHeight = res.statusBarHeight
                    console.log(statusBarHeight);
                    // 判断是苹果还是安卓,在res.system里面有系统信息
                    let isIOS = res.system.indexOf('iOS') > -1
                    if (isIOS) {
                        // 如果是苹果，则再加上5像素偏移
                        self.barHeight = statusBarHeight + 3
                        // console.log(self.barHeight);
                    } else {
                        // 如果是安卓, 则再加上8像素偏移，因为它们胶囊高度不同
                        self.barHeight = statusBarHeight + 8
                        // console.log(self.barHeight);
                    }
                }
            });
        }
    },
    watch: {},

    // 页面周期函数--监听页面加载
    onLoad() { },
    // 页面周期函数--监听页面初次渲染完成
    onReady() { },
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
.search {
    position: relative;
    width: 100vw;
    background-color: #fff;
    padding: 0 32rpx 12rpx;
    z-index: 999;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .search-box {
        position: relative;
        width: 60%;

        @media screen and (max-width: 320px) {
            width: 50%;
        }

        height: 64rpx;
        line-height: 64rpx;
        color: #ccc;
        font-size: 26rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f3f3f3;
        border-radius: 32rpx;
    }
}
</style>