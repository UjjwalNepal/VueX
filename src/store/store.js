import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	registered:[
		
	],
	unregistered:[
		
	],
	name:'',
	
}

const getters = {
	registered: state => state.registered,
	unregistered: state => state.unregistered
}

const mutations = {
	add(state,name){
		state.name = name
		state.unregistered.push(state.name)
	},
	remove(state,name){
		var index = state.unregistered.indexOf(name)
		state.unregistered.splice(index,1)
	},
	register(state, name){
		state.name = name
		var index = state.unregistered.indexOf(name)
		state.unregistered.splice(index,1)
		state.registered.push(state.name)
	},
	unregister(state,name){

		state.name = name
		var index = state.registered.indexOf(name)
		state.registered.splice(index,1)
		state.unregistered.push(state.name)
	}	
}

const actions = {
	add: ({commit},name) => {

		commit('add',name)
	},
	remove:({commit},name) => {
		console.log(name)
		commit('remove',name)
	},
	register:({commit},name) => {
		commit('register',name)
	},
	unregister:({commit},name) => {
		commit('unregister',name)
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

