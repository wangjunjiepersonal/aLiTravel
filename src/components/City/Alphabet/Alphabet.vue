<template>
	<ul class="list">
		<li class="item" 
			@touchstart.prevent="handleStart"
			@touchmove="handleMove"
			@touchend="handleEnd"
			v-for="(item,index) of letters"
			:key="item"
			:ref="item"
			>{{item}}</li>
	</ul>
</template>

<script>
	export default {
		data(){
			return {
				//控制滑动的变量
				touchStartus:false,
				startY:0,
				timer:null
			}
		},
		props:{
			cities:Object
		},
		updated(){
			this.startY = this.$refs['A'][0].offsetTop
		},
		methods:{
			handleStart(e){
				//滑动事件
				this.touchStartus = true
				this.$emit('change',e.target.innerText)
			},
			handleMove(e){
				if (this.touchStartus == true) {
					if (this.timer) {
						clearTimeout(this.timer)
					}
					//截流定时器 防止无休止的触发
					this.timer = setTimeout(() => {
						//滑动的初始值和结束值
						const touchY = e.touches[0].clientY - 79
						const index = Math.floor((touchY - this.startY) / 20)
						if (index >= 0 && index < this.letters.length) {
							this.$emit('change',this.letters[index])
						}
					},16)
				}
			},
			handleEnd(){
				this.touchStartus = false
			},
		},
		computed:{
			letters(){
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters
			}
		}
	}
</script>

<style scoped="scoped" lang="stylus">
	@import '~@/assets/styles/varibles.styl'
	.list{
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		.item{
			text-align:center
			line-height:.4rem
			color:$bgColor
		}
	}
</style>