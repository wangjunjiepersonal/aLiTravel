<template>
	<div class="list" ref="wrap"  >
		<div class="better_scroll">
			<!--当前的城市-->
			<div class="area">
				<div class="title border_top_bottom">当前城市</div>
				<div class="button_list">
					<div class="button-wrap">
						<div class="button">
							{{this.city}}
						</div>
					</div>
				</div>
			</div>
			<!--热门城市-->
			<div class="area">
				<div class="title border_top_bottom" @click="handleCity()">热门城市</div>
				<div class="button_list">
					<div class="button-wrap" 
						v-for="item of hotCities" 
						:key="item.id" 
						@click="handleCity(item.name)">
						<div class="button">
							{{item.name}}
						</div>
					</div>
				</div>
			</div>
			<!--所有城市列表-->
			<div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
				<div class="title border_top_bottom">{{key}}</div>
				<div class="item_list">
					<div class="item border-bottom" 
						@click="handleCity(inner.name)"
						v-for="inner of item" 
						:key="inner.id">
						{{inner.name}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll'
	import {mapState,mapActions} from 'vuex'
	
	export default {
		props:{
			hotCities:Array,
			cities:Object,
			letter:String
		},
		mounted(){
				const options = {
	        click: true,
	        taps: true
	      }
			 this.scroll = new Bscroll(this.$refs.wrap,options)
		},
		methods:{
			...mapActions(['changeCity']),
			//选择热门城市
			handleCity(name){
				this.changeCity(name)
				this.$router.push('/')
			}
		},
		watch:{
			//监听letter的变化 就是传递过来的字母
			letter(){
				if (this.letter) {
//					选中当前的索引区域 点击哪个选中哪个
					const element = this.$refs[this.letter][0]
					this.scroll.scrollToElement(element)
				}
			}
		},
		computed:{
			...mapState(['city'])
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	@import '~@/assets/styles/varibles.styl'
	.border_top_bottom{
		&:before{
			border-color: #ccc
		}
		&:after{
			border-color: #ccc
		}
	}
	.border-bottom{
		&:before{
			border-color: #ccc
		}
	}
	.list{
		position: absolute;
		top: 1.58rem;
		left: 0;
		right: 0;
		bottom: 0;
		overflow: hidden;
		.title{
			line-height: .54rem
			background-color: #eee
			padding-left: .2rem
			color: #666
			font-size: .26rem
		}
		.button_list{
			overflow: hidden
			padding: .1rem .6rem .1rem .1rem
			.button-wrap{
				width:33.33%
				float: left
				.button{
					text-align: center
					padding: .1rem
					margin: .1rem
					border: .02rem solid #ccc
					border-radius: .06rem
				}
			}
		}
		.item_list{
			.item{
				line-height: .76rem;
				color:#666;
				padding-left: .2rem;
			}
		}
	}
	
</style>