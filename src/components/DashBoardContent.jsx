import React,{useContext} from "react";
import {Filter} from "./Filter";
import FeedCard from "./FeedCard";
import { Outlet } from "react-router-dom";
import { Feed } from "./Feed";

//const {feed}=useOutletContext()

export const DashBoardContent = ({getFeed,allFeed=[]}) => {
  const [filtro, setFiltro] = React.useState("Todos");
  
  console.log(allFeed);
  
  
  
  return (
    <div className="p-4">
      <Filter onChange={setFiltro} />
      <div className="mt-4 space-y-4">
          <Outlet context={{allFeed,getFeed}}/>
          <Feed allFeed={allFeed}/>
      </div>
    </div>
  );
};

