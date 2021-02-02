import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app';
import common from './common';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    types: ['pressure', 'temperature', 'humidity'],
    dates: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: [],
  },
  mutations: {
    setData(state, data) {
      state.data = data
    },
    setRecord(state, record) {
      state.data.push(record);
    },
    putItem(state, newItem) {
      const idx = state.data.findIndex(item => item.id === newItem.id);
      state.data.splice(idx, 1, newItem);
    },
    removeItem(state, id) {
      const idx = state.data.findIndex(item => item.id === id);
      state.data.splice(idx, 1);
    }
  },
  actions: {
    async fetchData({ commit }) {
      const data = [];
      commit('clearError');
      commit('setLoading', true);

      try {
        const fbVal = await firebase.database().ref('/data/').once('value');
        const respose = fbVal.val() || [];
        Object.keys(respose).forEach((key) => {
          const item = respose[key];
          data.push({
            id: key,
            type: item.type,
            name: item.name,
            active: item.active,
            history: item.history,
          });
        });

        commit('setData', data)
        commit('setLoading', false);

      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }

    },
    async addNewRecord({ commit }, record) {
      commit('clearError');
      commit('setLoading', true);

      try {
        const newRecord = await firebase.database().ref('/data/').push(record);

        commit('setRecord', { ...record, id: newRecord.key });
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    },
    async changeItem({ commit }, item) {
      commit('clearError');
      commit('setLoading', true);

      try {
        await firebase.database().ref(`/data/${item.id}`).update({
          name: item.name,
          type: item.type,
          active: item.active,
          history: item.history
        });

        commit('putItem', item);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    },
    async delItem({ commit }, id) {
      commit('clearError');
      commit('setLoading', true);

      try {
        await firebase.database().ref(`/data/${id}`).remove();
        console.log(id)
        commit('removeItem', id);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    }
  },
  getters: {
    getData: (state) => state.data,
    getTypes: (state) => state.types,
    getDates: (state) => state.dates,
    getTypeData: (state) => type => state.data.filter(item => item.type === type) || [],
  },
  modules: {
    common
  }
})
