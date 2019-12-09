/* export default {
    add(state, option) {
        state.count += option.n
    },
    minud(state, option) {
        state.count -= option.n
    },
} */

export const add = (state, option) => {
    state.count += option.n
}
export function minus(state, option) {
    state.count -= option.n
}
export function stateChange(state,option){
    state.loginState = option.loginState
}