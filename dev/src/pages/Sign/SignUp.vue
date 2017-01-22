<style lang="stylus" scoped>
	$orange=#ff6932
	input
		width 100%
		height 2.6875rem
		border none
		&:first-of-type
			border-bottom 1px solid #ddd
			margin-top 1.1875rem
	a
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
</style>
<template>
	<div>
		<my-header hasBack="1" title="注册" />
		<input v-model="user" placeholder="请输入用户名"  />
		<input type="password" v-model="password" placeholder="请输入密码"/>
		<a @click="signUp">注册</a>
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
			async signUp(){
				const {modal} = this.$refs;
				if((await (await fetch("/api/sign_up", {
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					body: `user=${this.user}&password=${this.password}`,
					credentials: "include"
				})).json()).code){
					modal.toast({
						message: "注册失败",
						duration: 800,
					});
				}else{
					modal.toast({
						message: "注册成功",
						duration: 800,
					});
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