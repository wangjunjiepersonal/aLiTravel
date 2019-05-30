<template>
	<div class="container" @click="swiperShow">
		 <div class="wrap">
			 	<swiper :options="swiperOption" ref="mySwiper">
			    <!-- slides -->
			    <swiper-slide v-for="(item,index) of imgs" :key="index">
			    	<img class="swiper_img" :src="item"/>
			    </swiper-slide>
			   
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			  </swiper>
		 </div>
	</div>
	
</template>

<script>
//	import Banner from './Banner/Banner.vue'
	export default {
		props:{
			imgs:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				swiperOption:{
					//第一个指示点 第二个分号样式显示指示点 第三个第四个 发现dom结构发生变化 比如重新渲染时 自动刷新重新计算高度
					pagination: '.swiper-pagination',
	        paginationType: 'fraction',
	        observeParents: true,
	        observer: true
				}
			}
		},
		methods:{
			swiperShow(){
				this.$emit('close')
			}
		},
		components:{
			
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	.container >>> .swiper-container {
		overflow: inherit;
	}
	.container{
		display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
		.wrap{
			height: 0
      width: 100%
      padding-bottom: 100%
      .swiper_img{
      	width: 100%
      }
		}
	}
	.swiper-pagination{
		color: #fff;
		bottom:-1rem;
	}
</style>