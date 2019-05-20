<template>
	<div>
		<Header></Header>
		<Swiper></Swiper>
		<Icon></Icon>
	</div>
</template>

<script>
	import Header from './Header/Header.vue'
	import Swiper from './Swiper/Swiper.vue'
	import Icon from './Icon/Icon.vue'
	export default {
		data(){
			return{}
		},
		components:{
			Header,
			Swiper,
			Icon
		}
	}
	
</script>

<style>
</style>