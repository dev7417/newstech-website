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
                nbPages: action.payload.nbPages
            };
            case "GET_REMOVE":
            return{
                ...state,
                hits:state.hits.filter((curElem) => curElem.objectID !== action.payload
                )
            };
            case "SEARCH_DATA":
                return{
                    ...state,
                    query: action.payload
                };
                case "GET_NEXT_PAGE":{
                    return{
                        ...state,
                        page: state.page + 1,
                    }
                };
                case "GET_PREV_PAGE":{
                    return{
                        ...state,
                        page: state.page - 1
                    }
                }
    };
    return state;
};

export default reducer;