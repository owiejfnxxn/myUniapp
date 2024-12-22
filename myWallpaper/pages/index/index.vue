<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper indicator-dots indicator-color="rgba(0,0,0,0.5)" indicator-active-color="#000" autoplay circular>
				<swiper-item v-for="(bannerImage,index) in bannerImages" :key="index">
					<image :src="bannerImage" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="30" color="#28b389"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper autoplay interval="1500" duration="300" circular vertical>
					<swiper-item v-for="iten in 5">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#ccc"></uni-icons>
			</view>
		</view>
		
		<view class="select">
			<common-title>
				<template #left>每日推荐</template>
				<template #right>
					<view class="date">
						<uni-icons type="calendar" size="18" color="#000"></uni-icons>
						<uni-dateformat format="d号" :date="Date.now()"></uni-dateformat>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in 5">
						<image src="../../common/images/fitness-lift-weights.png" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<view class="theme">
			<common-title>
				<template #left>专题精选</template>
				<template #right>显示更多</template>
			</common-title>
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const bannerImages = ref([
		"../../common/images/big-launch.png",
		"../../common/images/team-work.png",
		"../../common/images/fitness-lift-weights.png"
	])

</script>

<style lang="scss" scoped>
	.homeLayout {
		// background: black;
		.banner {
			width: 750rpx;
			padding: 30rpx 0;

			swiper {
				width: 750rpx;
				height: 340rpx;

				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
		.notice{
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9;
			margin: 0 auto;
			border-radius: 40rpx;
			display: flex;
			.left{
				width: 140rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				.text{
					font-size: 30rpx;
					color: #28b389;
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			.center{
				flex:1 ;
				swiper{
					height: 100%;
					&-item{
						height: 100%;
						font-size: 30rpx;
						color: #666;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			.right{
				width: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.select{
			padding-top: 50rpx;
			.content{
				width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view{
					white-space: nowrap;
					.box{
						width: 200rpx;
						height: 430rpx;
						display: inline-block;
						margin-left: 15rpx;
						image{
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
					.box:last-child{margin-right: 30rpx;}
				}
			}
		}
	}
</style>