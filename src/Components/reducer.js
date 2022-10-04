const reducer = (state, action) =>{
    switch (action.type){
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }
        case "Get_Data":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                // nbPages: action.payload.nbPages
            };
    };
    return state;
};

export default reducer;