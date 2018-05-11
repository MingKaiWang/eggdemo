/**
 * Created by jili on 05/03/2017.
 * 省医院慢病微信服务号页面的错误处理函数,发送报错邮件
 */

import Vue from 'vue'
import axios from './api/chronicAxios'
import ErrorStackParser from 'error-stack-parser'
import get from 'lodash/get'
import stackTrace from 'stackframe'

const errorHandler = function (err) {
  console.log('errorHandler', err)
  if (err instanceof Error) {
    // 在控制台也进行打印，方便排错
    console.error('开始发送错误')
    axios.post('/public/javascript-errors', {
      errorUrl: window.location.href,
      errorMessage: err.toString(),
      stackTrace: ErrorStackParser.parse(err),
    })
  }
}

//开发模式不启用
window.addEventListener('unhandledrejection', function (err, promise) {
  //err为事件对象,取其中的reason属性
  if (get(err, 'reason')) {
    errorHandler(err.reason)
  }
})

window.onerror = function (msg, url, lineNo, columnNo, err) {
  console.log('window.onerror', err)
  //本地开发时,存在js来源和网站不同源的情况,不同源下,error为null
  errorHandler(err)
  return false
}

Vue.config.errorHandler = function (err, vm, info) {
  console.log('Vue.config.errorHandler', err, vm, info)
  //render函数报错
  errorHandler(err)
}

Vue.config.warnHandler = function (msg, vm, trace) {
  console.log('Vue.config.warnHandler', msg, vm, trace)
  throw new Error(msg)
}
