export default (state = { books: [], loading: false}, action) => {
    switch(action.type) {
        case 'LOADING_BOOKS':
            return {
                ...state,
                loading: true
            }
        
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false
            }

        default :
            return state
    }
}