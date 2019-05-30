<template>
	<div class="container">
		<div class="search">
			<input type="text" placeholder="输入城市名或拼音" v-model="keyWord" />
		</div>
		<div class="search_content" ref="search" v-show="keyWord">
			<ul>
				<li class="search_item border-bottom" 
					@click="handleCity(item.name)"
					v-for="item of list" 
					:key="item.id">{{item.name}}</li>
				<li class="search_item border-bottom" v-show="isShow">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import {mapState,mapActions} from 'vuex'
	
	export default {
		data(){
			return {
				keyWord:'',
				list:[],
				timer:null
			}
		},
		props:{
			cities:Object
		},
		watch:{
			keyWord(){
				if (this.timer) {
					clearTimeout(this.timer)
				}
				//显示隐藏搜索结果列表
				if (!this.keyWord) {
					this.list = []
					return
				}
				this.timer = setTimeout(() => {
					//通过关键词遍历检索cities对象中是否有符合项 
					const result = []
					for(let i in this.cities){
						this.cities[i].forEach(item => {
							if (item.spell.indexOf(this.keyWord) > -1 || item.name.indexOf(this.keyWord) > -1) {
								result.push(item)
							}
						})
					}
					this.list = result
				},100)
			}
		},
		mounted(){
			const options = {
	        click: true,
	        taps: true
	      }
			this.srcoll = new Bscroll(this.$refs.search,options)
		},
		computed:{
			isShow(){
				return !this.list.length
			}
		},
		methods:{
			...mapActions(['changeCity']),
			//选择热门城市
			handleCity(name){
				this.changeCity(name)
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	@import '~@/assets/styles/varibles.styl'
	.search{
		height: .72rem
		background-color: $bgColor
		padding: 0.1rem
		padding-top:0
		box-sizing: border-box
		input{
			width: 100%
			height: .62rem
			line-height: .62rem
			text-align: center
			border-radius: .06rem
			color: #222
			padding: 0.1rem
			box-sizing: border-box
		}
	}
	.search_content{
		position: absolute
		top: 1.58rem
		left: 0
		bottom: 0;
		right: 0
		overflow: hidden
		z-index: 99
		background-color: #eee
		.search_item{
			line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
		}
	}
</style>