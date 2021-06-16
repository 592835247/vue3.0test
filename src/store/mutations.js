import {
  GET_USER_INFO,
  GET_LOGIN_CODE,
  SET_NATIONAL_CODE,
  SET_CONFIG_LANG,
  SET_EMAIL_INFO
} from './mutations-types'
export default {
  //更新数据
  [GET_USER_INFO](state,{userinfo}){
    state.userinfo = userinfo

  },
  [GET_LOGIN_CODE](state,{code}){
    state.code = code

  },
  [SET_NATIONAL_CODE](state,{nationalcode}){
    state.nationalcode = nationalcode

  },
  [SET_CONFIG_LANG](state,{config}){
    state.config = config
  },
  [SET_EMAIL_INFO](state,{emailinfo}){
    state.emailinfo = emailinfo

  }
}
