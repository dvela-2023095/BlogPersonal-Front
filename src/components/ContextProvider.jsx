import React,{ createContext,useState} from "react"

export const FilterAndChangeContext = createContext()

export const FilterProvider=({children})=>{
    const [filter,setFilter]=useState('TODO')
    const [change,setChange]=useState(false)
    return(
        <FilterAndChangeContext.Provider value={{filter,setFilter,change,setChange}}>
            {children}
        </FilterAndChangeContext.Provider>
    )
}