const filterName = (state = {}, action) => {
    switch  (action.type){
        case 'SET_FILTER':
            return {...state, filterName: action.payload}
        default:
            return state;
    }
}

export default filterName;