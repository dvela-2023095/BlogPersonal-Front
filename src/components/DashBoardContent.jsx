import React,{useContext} from "react";
import {Filter} from "./Filter";
import { Outlet } from "react-router-dom";
import { FilterProvider } from "./ContextProvider";
//const {feed}=useOutletContext()

export const DashBoardContent = ({getFeed,allFeed=[]}) => {
  
  
  
  
  
  return (
    <div className="p-4">
      <FilterProvider>
        <Filter/>
        <div className="mt-4 space-y-4">
            <Outlet context={{allFeed,getFeed}}/>
        </div>
      </FilterProvider>
    </div>
  );
};

