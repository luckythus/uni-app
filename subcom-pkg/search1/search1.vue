<template>
    <view class="search">
        <!-- 搜索框 -->
        <view class="search-box">
            <u-search v-model="searchValue"></u-search>
        </view>

        <!-- 搜索历史 -->
        <view class="history-box">
            <view class="history-title" v-if="historyList.length !== 0">
                <text>搜索历史</text>
                <u-icon name="trash"></u-icon>
            </view>
            <view class="history-list">
                <uni-tag class="uTag" v-for="(item, index) in historyList" :key="index" :text="item"></uni-tag>
            </view>
        </view>
        <!-- 热门推荐 -->
        <view class="hot-box">
            <view class="hot-title">
                <text>热门推荐</text>
            </view>
            <view class="hot-list">
                <uni-tag class="uTag" v-for="(item, index) in hotList" :key="index" :text="item"></uni-tag>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            searchValue: '',
            historyList: ['前端', 'JavaScript', 'Node.js'],
            hotList: ['前端','TypeScript','Three.js','Vue','React','Uni-app','Canvas','HTML','CSS', 'JavaScript', 'Node.js',]
        }
    },
    computed: {},
    methods: {},
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
    padding: 24rpx;
    .search-box {
        padding-bottom: 20rpx
    }
    .history-box {
        padding: 0 10rpx 40rpx;

        .history-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            font-size: 16px;
            font-weight: bold;
        }

        .history-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            .uTag {
                margin: 5px 5px 5px 0;
            }
            ::v-deep .uni-tag {
                border-radius: 30px;
            }
        }
    }
    .hot-box {
        padding: 0 10rpx 50rpx;
        .hot-title {
            font-weight: bold;
            font-size: 16px;
            height: 40px;
        }
        .hot-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            .uTag {
                margin: -5px 5px 16px 0;
            }
            ::v-deep .uni-tag {
                border-radius: 30rpx;
            }
        }
    }
}</style>