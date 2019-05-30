<template>
	<div>
		<Header></Header>
		<Swiper :list="swiperList"></Swiper>
		<Icon :list="iconList"></Icon>
		<Recommend :list="RecommendList"></Recommend>
		<Weekend :list="WeekendList"></Weekend>
	</div>
</template>

<script>
	import Header from './Header/Header.vue'
	import Swiper from './Swiper/Swiper.vue'
	import Icon from './Icon/Icon.vue'
	import Recommend from './Recommend/Recommend.vue'
	import Weekend from './Weekend/Weekend.vue'
	import axios from 'axios'
	import {mapState} from 'vuex'
	export default {
		data(){
			return{
				swiperList:[],
				iconList:[],
				RecommendList:[],
				WeekendList:[],
				lastCity:''
			}
		},
		created(){
			this.lastCity = this.city
			this.getHomeInfo()
		},
		methods:{
			getHomeInfo(){
				axios.get(`/api/index.json?city=${this.city}`).then(res => {
					res = res.data
					if (res.ret && res.data) {
						this.swiperList = res.data.swiperList
						this.iconList = res.data.iconList
						this.RecommendList = res.data.recommendList
						this.WeekendList = res.data.weekendList
					}
					
				})
			}
		},
		computed:{
			...mapState(['city'])
		},
		activated(){
			//检测keep-alive缓存的数据是否发生变化的方法
			if (this.lastCity !== this.city) {
				this.lastCity = this.city
				this.getHomeInfo()
			}
		},
		components:{
			Header,
			Swiper,
			Icon,
			Recommend,
			Weekend
		}
	}
	
</script>

<style>
</style>