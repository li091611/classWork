import http from './index'

export function login(option) {
    return http.post('/v3/oauth/sign_in',option)
}