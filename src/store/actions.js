import {
  GET_USER_INFO,
  GET_LOGIN_CODE,
  SET_NATIONAL_CODE,
  SET_CONFIG_LANG,
  SET_EMAIL_INFO
} from './mutations-types'
export default {
  async get_user_info({commit},{userinfo}){
    commit(GET_USER_INFO,{userinfo})
  },
  async get_login_code({commit},{code}){
    console.log(code,'s213123')
    commit(GET_LOGIN_CODE,{code})
  },
  async set_national_code({commit},{nationalcode}){
    commit(SET_NATIONAL_CODE,{nationalcode})
  },
  async set_config_lang({commit},{config}){
    commit(SET_CONFIG_LANG,{config})
  },
  async set_email_info({commit},{emailinfo}){
    commit(SET_EMAIL_INFO,{emailinfo})
  },

}
