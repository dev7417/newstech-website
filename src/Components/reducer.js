const reducer = (state, action) =>{
    switch (action.type){
        case "Get_Data":
            return {
                ...state,
                hits: action.payload.hits,
                // nbPages: action.payload.nbPages
            };
    };
    return state;
};

export default reducer;