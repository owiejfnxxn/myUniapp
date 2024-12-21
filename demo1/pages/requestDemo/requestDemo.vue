<template>
 <view class="container">
	<view class="layout">
		<view class="box" v-for="(item,index) in arrs" :key="item.id">
			<view class="pic">
				<image lazy-load :src="item.url" mode="widthFix" @click="onPreview(index)"></image>
			</view>
			<view class="text">
				{{item.height}}
			</view>
			<view class="author">—— {{item.width}}</view>
		</view>
	</view>
	<view class="loadMore">
		<uni-load-more status="more"></uni-load-more>
	</view>
	<view class="float">
		<view class="item" @click="onFlash()">
			<uni-icons type="refreshempty" size="30" color="#888"></uni-icons> 
			
		</view>
		<view class="item" :class="{active:!toTopStaus}" @click="toTop()">
			<uni-icons type="arrow-up" size="30" color="#888"></uni-icons>
		</view>
		<view class="box"></view>
	</view>
 </view>
</template>

<script setup>
	import {ref} from 'vue'
	import {onReady,onReachBottom,onPullDownRefresh,onPageScroll} from '@dcloudio/uni-app'

	//数据源
	const arrs = ref([])
	//回到顶部按钮状态
	const toTopStaus = ref(false)
	//点击刷新
	onPageScroll((e)=>{
		if(e.scrollTop > 1000) toTopStaus.value = true
		else toTopStaus.value = false
	})
	//点击刷新
	function onFlash(){
		uni.startPullDownRefresh()
	}
	//返回顶部
	function toTop(){
		uni.pageScrollTo({
			scrollTop:0,
			duration: 300
		})
	}

	uni.showLoading({
		
	})
	//下拉刷新
	onPullDownRefresh(()=>{
		arrs.value = [];
		network()
	})
	//触底加载更多
	onReachBottom(()=>{
		setTimeout(()=>{
			network()
		},250)
	})
	//图片预览
	const onPreview = function(index){
		let urls = arrs.value.map(item=>item.url)
		uni.previewImage({
			current:index,
			urls
		})
	}
	//网络请求
	function network(){
		uni.request({
			url:"https://api.thecatapi.com/v1/images/search",
			data:{
				limit:10
			}
		}).then(res=>{
			arrs.value = [...arrs.value,...res.data]
		}).finally(()=>{
			uni.hideLoading()
			uni.stopPullDownRefresh()
		})
	}
	network()
</script>

<style lang="scss" scoped>
	.container{
		.layout{
			padding: 50rpx;
			.box{
				margin-bottom: 60rpx;
				box-shadow: 0 10rpx 100rpx rgba(0,0,0,0.18);
				border-radius: 15rpx;
				overflow: hidden;
				.pic{
					image{
						width: 100%;
					}
				}
				.text{
					padding: 30rpx;
					color: #333;
					font-size: 32rpx;
				}
				.author{
					padding: 0rpx 30rpx 0rpx;
					text-align: right;
					color: #888;
					font-size: 28rpx;
				}
			}
		}
		.float{
			position: fixed;
			right: 30rpx;
			bottom: 80rpx;
			.item{
				width: 90rpx;
				height: 90rpx;
				background: rgba(255, 255, 255, 0.6);
				border-radius: 50%;
				margin-bottom: 60rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				box-shadow: 0 10rpx 100rpx rgba(0,0,0,0.18);
				border: 1rpx solid #eee;
			}
			
		}
		.loadMore{
			padding-bottom: calc(env(safe-area-inset-bottom) + 50rpx);
		}
	}
	.active{
		visibility: hidden;
		// display: none !important;
	}
</style>