import { useOutletContext } from "react-router-dom"
import FeedCard from "./FeedCard"


export const Feed =({allFeed})=>{
    const handleNavigateToOpinion=()=>{

    }
    
    return(
        <>
            {
                allFeed.map((opinion)=>(
                    <FeedCard
                    key={opinion._id}
                    author={opinion.author}
                    tittle={opinion.tittle}
                    category={opinion.category}
                    text={opinion.text}
                    coments={opinion.coments}
                    createdAt={opinion.createdAt}
                    />
                ))
            }
        </>
    )
}