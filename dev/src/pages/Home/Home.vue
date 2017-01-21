<style lang="stylus" scoped>
	.home
		padding-bottom 3.125rem
</style>
<template>
	<div class="home">
		<banner action="/api/get_banner/home" />
		<search ref="search" />
		<my-filter />
		<modal ref="modal" />
		<list :data="data" />
	</div>
</template>
<script>
	import Banner from "../components/banner";
	import Search from "../components/search";
	import MyFilter from "../components/filter";
	import Modal from "../components/modal";
	import List from "../components/list";
	export default {
		data(){
			return {
				data: []
			};
		},
		components: {
			Banner,
			Search,
			MyFilter,
			Modal,
			List
		},
		async beforeCreate(){
			this.data = (await (await fetch("/api/house/get")).json()).data;
		}
	}
</script>

