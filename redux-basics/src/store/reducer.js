import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return ({
                ...state,
                counter: state.counter + 1
            })
        case actionTypes.DECREMENT:
            return ({
                ...state,
                counter: state.counter - 1
            })
        case actionTypes.ADD:
            return ({
                ...state,
                counter: state.counter + action.val
            })
        case actionTypes.SUB:
            return ({
                ...state,
                counter: state.counter - action.val
            })
        case actionTypes.STORE_RESULT:
            return ({
                ...state,
                results: state.results.concat({id: new Date(), val: state.counter})
            })
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultId)
            return ({
                ...state,
                results: updatedArray
            })
        default:
            break;
    }
    return state;
}

export default reducer;