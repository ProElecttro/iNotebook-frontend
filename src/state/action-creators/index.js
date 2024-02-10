export const withdrawAmount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        })
    }
}

export const depositAmount = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        })
    }
}
