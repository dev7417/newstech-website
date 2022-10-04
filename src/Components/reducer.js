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
                    let nxtpageNum = state.page + 1;
                    if(nxtpageNum > state.nbPages){
                        nxtpageNum = 0;
                    }else{

                    
                    return{
                        ...state,
                        page: nxtpageNum,
                    }
                }
                };
                case "GET_PREV_PAGE":{
                    let pageNum = state.page;
                    if(pageNum <= 0){
                        pageNum = 0
                    }else{
                        pageNum = pageNum - 1;
                    }
                    
                    return{
                        ...state,
                        page: pageNum,
                   
                }
                }
    };
    return state;
};

export default reducer;