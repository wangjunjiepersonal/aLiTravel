import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'

try{
	let city = localStorage.getItem('city')
	if (city) {
		defaultCity = city
	}
}catch(e){}

export default new Vuex.Store({
	state:{
		city:defaultCity,
	},
	actions:{
		changeCity(ctx,city){
			ctx.commit('changeCity',city)
		}
	},
	mutations:{
		changeCity(state,city){
			state.city = city
			localStorage.setItem('city',city)
			try{
				if (localStorage.getItem('city')) {
					localStorage.setItem('city',city)
				}
			}catch(e){}
		}
	}
		
	
})
