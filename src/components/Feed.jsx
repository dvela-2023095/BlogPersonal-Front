import { useOutletContext } from "react-router-dom"
import {FeedCard} from "./FeedCard"
import { useContext, useEffect, useState } from "react"
import { FilterAndChangeContext } from "./ContextProvider"


export const Feed =()=>{
    const {allFeed}=useOutletContext()
    const {filter,setFilter}=useContext(FilterAndChangeContext)
    const [myFeed,setMyFeed]=useState([])
    const handleNavigateToOpinion=()=>{

    }
    useEffect(()=>{
        if(filter==='TODOS'){
                setMyFeed(allFeed)
        }else{
                let filteredList = allFeed.filter((post)=> post.category.name === filter)
                setMyFeed(filteredList)
        }
    },[filter])
    
    return(
        <>
        <p>{filter}</p>
            {
                myFeed.length===0?(allFeed.map((opinion)=>(
                    <FeedCard
                    key={opinion._id}
                    tittle={opinion.tittle}
                    category={opinion.category}
                    text={opinion.text}
                    coments={opinion.comments}
                    createdAt={opinion.createdAt}
                    id={opinion._id}
                    />
                ))):(myFeed.map((opinion)=>(
                    <FeedCard
                    key={opinion._id}
                    tittle={opinion.tittle}
                    category={opinion.category}
                    text={opinion.text}
                    coments={opinion.comments}
                    createdAt={opinion.createdAt}
                    id={opinion._id}
                    />
                )))
            }
        </>
    )
}