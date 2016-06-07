import api from '../utils/api'

/**
 * 登录
 * @param dispatch
 * @param email
 * @param password
 * @returns {Promise}
 */
export function signIn ({ dispatch }, email, password) {
  return api.signIn(email, password).then(userObj => {
    dispatch('setUser', userObj)
    return userObj
  })
}

/**
 * 判断用户是否已登录
 * @param state
 * @returns {boolean}
 */
export function hasSigned ({ state }) {
  return !!state.user
}
