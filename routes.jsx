
import { element } from "prop-types";
import { AuthPage } from "./src/pages/Auth/AuthPage";
import { DashBoardPage } from "./src/pages/DashBoardPage";


export const routes=[
    {
        path:'/',
        element:<AuthPage/>
    },
    {
        path:'/dashboard',
        element:<DashBoardPage/>
    }
]