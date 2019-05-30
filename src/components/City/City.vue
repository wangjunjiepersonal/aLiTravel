<template>
	<div>
		<Header></Header>
		<Search :cities="cities"></Search>
		<List :letter="letter" :cities="cities" :hotCities="hotCities"></List>
		<Alphabet @change="handleClick" :cities="cities"></Alphabet>
	</div>
</template>

<script>
	import Header from './Header/Header.vue'
	import Search from './Search/Search.vue'
	import List from './List/List.vue'
	import Alphabet from './Alphabet/Alphabet.vue'
	
	import axios from 'axios'
	
	export default {
		data(){
			return{
				cities:{},
				hotCities:[],
				letter:''
			}
		},
		created(){
			this.getCityInfo()
		},
		methods:{
			//获取服务器数据
			getCityInfo(){
				axios.get('api/city.json').then(res => {
					if (res.data) {		
						console.log(res)
						this.cities = res.data.data.cities
						this.hotCities = res.data.data.hotCities
					}
				})
			},
			//父子组件传值
			handleClick(letter){
				this.letter = letter
			}
		},
		components:{
			Header,
			Search,
			List,
			Alphabet
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	
</style>