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
    useEffect(() => {
        if (filter === 'TODOS') {
            setMyFeed(allFeed);
        } else if (filter === 'Recientes') {
            const filteredList = [...allFeed].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            setMyFeed(filteredList);
        } else if (filter === 'Ultimos') {
            const filteredList = [...allFeed].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setMyFeed(filteredList);
        } else {
            const filteredList = allFeed.filter(post => post.category.name === filter);
            setMyFeed(filteredList);
        }
    }, [filter, allFeed])
    
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