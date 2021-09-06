import React, { createContext, useContext,useState } from "react";

export const ArticlesContext = createContext()

export const useArticle = () => useContext(ArticlesContext)

export const ArticlesProvider = ({children})=>{

    const [currentArticle,setcurrentArticle] = useState({})

    return ( <ArticlesContext.Provider value={[currentArticle,setcurrentArticle]}>
        {children}
    </ArticlesContext.Provider>)
}