<style lang="stylus" scoped>
	$orange= #ff6932
	footer
		position fixed
		bottom 0
		background-color white
		a
			text-align center
			width 4rem
			height 2.7rem
			font-size 0.64rem
			color #b4b4b4
			border-top 1px solid #e5e5e5
			overflow hidden
			float left
			.icon
				display block
				margin .32rem auto .16rem
			&.router-link-active
				.icon
					color $orange
				span
					color $orange
			div
				margin 0 auto
				width 2.375rem
				height 2.0625rem
				background-color $orange 
				border-radius 0.1875rem
				.icon
					width 1.4125rem
					height @width
					color white
</style>

<template>
	<footer>
		<router-link v-for="(item,$index) of settings" :to="item.href"><!-- $index获取当前下标 -->
			<svg v-if="$index !== 2" class="icon" aria-hidden="true">
				<use :xlink:href="`#icon-${item.icon}`"></use>
			</svg>
			<span v-if="$index !== 2">{{item.name}}</span>
			<div v-else>
				<svg class="icon" aria-hidden="true">
					<use :xlink:href="`#icon-${item.icon}`"></use>
				</svg>
			</div>		
		</router-link>
	</footer>
</template>


<script>
	export default {
		data(){
			return {
				settings :[
					{
						name : "首页",
						icon : "all",
						href : "/home"
					},
					{
						name : "预约",
						icon : "phone",
						href : "/order"
					},
					{
						name : "",
						icon : "add",
						href : "/new"
					},
					{
						name : "信息",
						icon : "comments",
						href : "/info"
					},
					{
						name : "我",
						icon : "account",
						href : "/me"
					}
				]
			}
		}
	}
</script>