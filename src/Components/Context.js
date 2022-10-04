
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

let Api_url = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query: "Css",
    nbPages: 0,
    page: 0,
    hits: []
};

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const fetchNewsData = async (url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type: "Get_Data",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchNewsData(`${Api_url}query=${state.query}&page=${state.page}`);
    }, [])

    return (
        <AppContext.Provider value={{ ...state }}> {children}</AppContext.Provider>
    )

}
// We Create Custom Hook
const useGlobal = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobal };