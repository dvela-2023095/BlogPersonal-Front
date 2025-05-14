import React, { useEffect } from "react";
import {NavBar} from '../components/NavBar'
import {UpMenu} from "../components/UpMenu";
import {DashBoardContent} from "../components/DashBoardContent";
import { useFeed } from "../shared/hooks/useFeed";
export const DashBoardPage = () => {
  const {getFeed,allFeed}=useFeed()
  useEffect(()=>{
    getFeed()
  },[])
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/5 border-r border-gray-300">
        <NavBar />
      </div>

      <div className="w-3/5 flex flex-col">
        <UpMenu/>
        
      </div>

      {/* Right side (can be empty or for future use) */}
      <div className="w-1/5 border-l border-gray-300 hidden lg:block" />
    </div>
  );
};