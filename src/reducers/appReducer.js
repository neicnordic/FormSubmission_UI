import {
    APP_ACTIONS
} from '../actions/app.actions'


const initialState = {
    loading: false,
    popout: {
        display: false,
        content: ""
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case APP_ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.loading,
            }

        case APP_ACTIONS.SET_POPOUT:
            return {
                ...state,
                popout: action.popout,
            }
        default:
            return state;
    }
}