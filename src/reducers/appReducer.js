import {
    APP_ACTIONS
} from '../actions/app.actions'


const initialState = {
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case APP_ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.loading,
            }
        default:
            return state;
    }
}