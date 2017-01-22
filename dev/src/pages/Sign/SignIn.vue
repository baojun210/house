<style lang="stylus" scoped>
	$orange=#ff6932
	.bg
		width 100%
		background-color white
		p
			width 18.75rem
			margin 0 auto
			background-color white
			border-bottom 1px solid #ddd
			&:first-of-type
				margin-top 1.1875rem
			span
				font-size 1rem
				padding-bottom .875rem
			input
				width 13.375rem
				height 2.625rem
				border none
				padding 1rem 0	
	a
		&:first-of-type
			display block
			margin 2.3125rem auto 1.1875rem
			width 18.75rem
			height 2.4375rem
			font-size 1rem
			color rgb(243,243,243)
			line-height @height
			text-align center
			border-radius 4px
			background-color rgb(199,199,199)
		&:last-of-type
			color $orange
			font-size .75rem
			margin-left 1.25rem
</style>
<template>
	<div>
		<my-header hasBack="1" title="登录" />
		<div class="bg">
			<p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bussinessman"></use>
				</svg>
				<span>账号：</span>
				<input v-model="user" placeholder="请输入用户名"  />
			</p>
			<p>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-yingckjian"></use>
				</svg>
				<span>密码：</span>
				<input type="password" v-model="password" placeholder="请输入密码"/>
			</p>
		</div>
		<a @click="signIn">登录</a>
		<router-link to="/sign_up" v-text="'跳转注册'" />
		<modal ref="modal" type="fixed" />
	</div>
</template>
<script>
	import MyHeader from "../../components/Header";
	import Modal from "../../components/Modal";
	export default {
		data(){
			return {
				user: "",
				password: ""
			};
		},
		methods: {
			async signIn(){
				const {modal} = this.$refs;
				const {
					data,
					code
				} = await (await fetch("/api/sign_in", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `user=${this.user}&password=${this.password}`,
					credentials: "include"
				})).json();
				if(code){
					modal.toast({
						message: "登录失败",
						duration: 800,
					});
				}else{
					modal.toast({
						message: "登录成功",
						duration: 800,
					});
					this.$router.push("/me");
					this.$parent.user = data;
				}
			}
		},
		components: {
			MyHeader,
			Modal
		},
		beforeCreate(){
			this.$parent.footer = 0;
		}
	};
</script>