export const APP_ACTIONS = {
    SET_LOADING: "SET_LOADING",
    SET_POPOUT: "SET_POPOUT",
}


export const setLoadingState = loading => ({
    type: APP_ACTIONS.SET_LOADING,
    loading
})

export const setPopout = (popout)=>({
    type: APP_ACTIONS.SET_POPOUT,
    popout
})