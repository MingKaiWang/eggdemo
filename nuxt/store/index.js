import Vuex from 'vuex'



const createStore = () => {
  return new Vuex.Store({
    state: {
      userInfo: {}
    },
    mutations: {
      userInfo(state, user) {
        state.userInfo = user
      }
    },
    actions: {
      nuxtServerInit({
        commit
      }, {
        req
      }) {
        return new Promise((resolve) => {
          setTimeout(() => {
            commit('userInfo', {
              "aac001": "010221663",
              "birth": -591609600000,
              "headUrl": "http://thirdwx.qlogo.cn/mmopen/dBtuCar8RxYXNLkWyYBftAS8KKkfrsDuPiaQy3kmY1P9UP2ibnzvjfcn1ibUS1Eojib0IdFRFnzeNbT6fGFibPrpUQeF5Ys2lCfDR/132",
              "name": "罗红",
              "nextAttendanceDate": 1527004800000,
              "nextAttendanceIntervalDays": 17,
              "nickName": "松松",
              "orgId": 10301,
              "patientId": 2114528,
              "sex": 1,
              "wechatId": "oeldH0_i6h2RkKIrmO1l4lIDEcfk"
            })
            resolve()
          }, 0)
        })
      }
    }
  })
}


export default createStore
