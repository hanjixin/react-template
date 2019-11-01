import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './reducers'
const loggerMiddleware = createLogger()
let store = createStore(App, 
  applyMiddleware(thunkMiddleware, // 允许我们 dispatch() 函数
  loggerMiddleware ))// 一个很便捷的 middleware，用来打印 action 日志))
export default store