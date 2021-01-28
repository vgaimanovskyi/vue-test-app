import Vue from 'vue'
import Vuex from 'vuex'
import { uuid } from 'vue-uuid';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    types: ['pressure', 'temperature', 'humidity'],
    dates: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    data: [
      {
        id: uuid.v1(), // "b2206530-6144-11eb-9c6e-3b540446d80b",
        type: 'pressure',
        name: 'pressure_01',
        active: true,
        history: [
          {
            date: 'January',
            value: 5,
          },
          {
            date: 'February',
            value: 10,
          },
          {
            date: 'March',
            value: 12,
          },
          {
            date: 'April',
            value: 15,
          },
          {
            date: 'May',
            value: 12,
          },
          {
            date: 'June',
            value: 9,
          },
          {
            date: 'July',
            value: 5,
          },
          {
            date: 'August',
            value: 8,
          }
        ]
      }, {
        id: uuid.v1(),
        type: 'pressure',
        name: 'pressure_02',
        active: true,
        history: [
          {
            date: 'January',
            value: 7,
          },
          {
            date: 'February',
            value: 4,
          },
          {
            date: 'March',
            value: 9,
          },
          {
            date: 'April',
            value: 12,
          },
          {
            date: 'May',
            value: 10,
          },
          {
            date: 'June',
            value: 12,
          },
          {
            date: 'July',
            value: 8,
          }
        ]
      }, {
        id: uuid.v1(),
        type: 'pressure',
        name: 'pressure_03',
        active: false,
        history: [
          {
            date: 'January',
            value: 3,
          },
          {
            date: 'February',
            value: 7,
          },
          {
            date: 'March',
            value: 7,
          },
          {
            date: 'April',
            value: 10,
          },
          {
            date: 'May',
            value: 15,
          },
          {
            date: 'June',
            value: 13,
          },
          {
            date: 'July',
            value: 11,
          }
        ]
      }, {
        id: uuid.v1(),
        type: 'pressure',
        name: 'pressure_04',
        active: true,
        history: [
          {
            date: 'January',
            value: 2,
          },
          {
            date: 'February',
            value: 8,
          },
          {
            date: 'March',
            value: 10,
          },
          {
            date: 'April',
            value: 13,
          },
          {
            date: 'May',
            value: 12,
          },
          {
            date: 'June',
            value: 14,
          },
          {
            date: 'July',
            value: 13,
          },
          {
            date: 'August',
            value: 14,
          }
        ]
      }, {
        id: uuid.v1(),
        type: 'temperature',
        name: 'temperature_01',
        active: true,
        history: [
          {
            date: 'January',
            value: 4,
          },
          {
            date: 'February',
            value: 9,
          },
          {
            date: 'March',
            value: 6,
          },
          {
            date: 'April',
            value: 9,
          },
          {
            date: 'May',
            value: 10,
          },
          {
            date: 'June',
            value: 11,
          },
          {
            date: 'July',
            value: 13,
          }
        ]
      }, {
        id: uuid.v1(),
        type: 'temperature',
        name: 'temperature_02',
        active: false,
        history: [
          {
            date: 'January',
            value: 2,
          },
          {
            date: 'February',
            value: 5,
          },
          {
            date: 'March',
            value: 8,
          },
          {
            date: 'April',
            value: 12,
          },
          {
            date: 'May',
            value: 8,
          },
          {
            date: 'June',
            value: 6,
          },
          {
            date: 'July',
            value: 8,
          }
        ]
      }, {
        id: uuid.v1(),
        type: 'temperature',
        name: 'temperature_03',
        active: true,
        history: [
          {
            date: 'January',
            value: 10,
          },
          {
            date: 'February',
            value: 7,
          },
          {
            date: 'March',
            value: 4,
          },
          {
            date: 'April',
            value: 6,
          },
          {
            date: 'May',
            value: 12,
          },
          {
            date: 'June',
            value: 13,
          },
          {
            date: 'July',
            value: 15,
          },
          {
            date: 'August',
            value: 14,
          }
        ]
      }, {
        id: uuid.v1(),
        type: 'humidity',
        name: 'humidity_01',
        active: false,
        history: [
          {
            date: 'January',
            value: 5,
          },
          {
            date: 'February',
            value: 7,
          },
          {
            date: 'March',
            value: 12,
          },
          {
            date: 'April',
            value: 10,
          },
          {
            date: 'May',
            value: 11,
          },
          {
            date: 'June',
            value: 13,
          },
          {
            date: 'July',
            value: 15,
          }
        ]
      }, {
        id: uuid.v1(),
        type: 'humidity',
        name: 'humidity_02',
        active: false,
        history: [
          {
            date: 'January',
            value: 3,
          },
          {
            date: 'February',
            value: 4,
          },
          {
            date: 'March',
            value: 5,
          },
          {
            date: 'April',
            value: 5,
          },
          {
            date: 'May',
            value: 7,
          },
          {
            date: 'June',
            value: 8,
          },
          {
            date: 'July',
            value: 6,
          }
        ]
      }, {
        id: uuid.v1(),
        type: 'humidity',
        name: 'humidity_03',
        active: true,
        history: [
          {
            date: 'January',
            value: 8,
          },
          {
            date: 'February',
            value: 10,
          },
          {
            date: 'March',
            value: 6,
          },
          {
            date: 'April',
            value: 8,
          },
          {
            date: 'May',
            value: 8,
          },
          {
            date: 'June',
            value: 10,
          },
          {
            date: 'July',
            value: 9,
          },
          {
            date: 'August',
            value: 8,
          }
        ]
      },
    ],
  },
  mutations: {
    setRecord(state, record) {
      state.data.push(record);
    },
    putItem(state, newItem) {
      const idx = state.data.findIndex(item => item.id === newItem.id);
      state.data.splice(idx, 1, newItem);
    }
  },
  actions: {
    addNewRecord({ commit }, record) {
      commit('setRecord', record);
    },
    changeItem({ commit }, item) {
      commit('putItem', item);
    }
  },
  getters: {
    getData: (state) => state.data,
    getTypes: (state) => state.types,
    getDates: (state) => state.dates,
    getTypeData: (state) => type => state.data.filter(item => item.type === type),
  },
})
