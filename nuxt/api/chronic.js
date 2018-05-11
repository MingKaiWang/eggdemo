/**
 * Created by 若水医疗 on 2018/2/23 6:17 PM.
 */

import axios from './chronicAxios'

export default {
  getApply (patientId) {
    return axios.get('/public/chronic/wechat/apply?patientId=' + patientId)
  },
  getRecordList (patientId) {
    return axios.get('/public/chronic/wechat/recordList?patientId=' + patientId)
  },
  getRecordDetail (patientId, registrationId) {
    return axios.get(
      '/public/chronic/wechat/recordDetail?patientId=' +
      patientId +
      '&registrationId=' +
      registrationId,
    )
  },
  getArrangePlan (patientId) {
    return axios.get(
      '/public/chronic/wechat/getArrangePlan?patientId=' + patientId,
    )
  },
  getDoctorWithArrangPlan (orgId, aac001) {
    return axios.get(
      '/public/chronic/wechat/getDoctorWithArrangPlan?orgId=' + orgId +
      '&aac001=' + aac001,
    )
  },
  adminUser () {
    return axios.get('/admin/user/all')
  },
  addData (data) {
    return axios.post('/public/chronic/wechat/addData', data)
  },
  getUserData (aac001) {
    return axios.get('/public/chronic/wechat/getUserData?aac001=' + aac001)
  },
}
