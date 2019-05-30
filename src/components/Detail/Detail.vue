<template>
	<div>
		<Banner 
			:sightName="sightName" 
			:gallaryImgs="gallaryImgs"
			:bannerImg="bannerImg"></Banner>
		<Header></Header>
		<div class="content">
			<List :list="list"></List>
		</div>
	</div>
	
</template>

<script>
	import Banner from './Banner/Banner.vue'
	import Header from './Header/Header.vue'
	import List from './List/List.vue'
	
	import axios from 'axios'
	
	export default {
		name:'Detail',
		data(){
			return {
				sightName:'',
				bannerImg:'',
				gallaryImgs:[],
				list:[]
			}
		},
		created(){
			this.getDetailInfo()
		},
		methods:{
			getDetailInfo(){
				axios.get(`api/detail.json?id=${this.$route.params.id}`).then(res => {
					res = res.data
					if (res.data) {
						this.sightName = res.data.sightName
						this.bannerImg = res.data.bannerImg
						this.gallaryImgs = res.data.gallaryImgs
						this.list = res.data.categoryList
					}
				})
			}
		},
		components:{
			Banner,
			Header,
			List
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	.content{
		height: 50rem;
	}
</style>