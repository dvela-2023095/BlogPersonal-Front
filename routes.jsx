
import { element } from "prop-types";
import { AuthPage } from "./src/pages/Auth/AuthPage";
import { DashBoardPage } from "./src/pages/DashBoardPage";
import { Feed } from "./src/components/Feed";
import { DetailFeedCard } from "./src/components/DetailFeedCard";


export const routes=[
    {
        path:'/',
        element:<AuthPage/>
    },
    {
        path:'/dashboard',
        element:<DashBoardPage/>,
        children:[
            {
                path:'feed',
                element:<Feed/>
            },
            {
                path:'details',
                element:<DetailFeedCard/>
            }
        ]
    }
]