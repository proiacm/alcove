export default (state = { genres: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_GENRES":
            return {
                ...state,
                loading: true
            }
        
        case "GENRES_LOADED":
            return {
                ...state,
                genres: action.payload,
                loading: false
            }

        default :
            return state
    }
}