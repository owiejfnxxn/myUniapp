<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// #ifdef MP-WEIXIN
			// uni.setTabBarItem({
			// 	index:1,
			// 	text:"自定义"
			// })
			// uni.setTabBarBadge({
			// 	index:1,
			// 	text:"100",
			// })
			// uni.showTabBarRedDot({
			// 	index:2
			// })
			// #endif
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
