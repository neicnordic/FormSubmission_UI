export const APP_ACTIONS = {
    SET_LOADING: "SET_LOADING",
}


export const setLoadingState = loading => ({
    type: APP_ACTIONS.SET_LOADING,
    loading
})
