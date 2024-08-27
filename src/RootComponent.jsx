// import react from "react";
import {RecoilRoot} from "recoil";
import App from "./App";

export default function RootComponent(){
    return(
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    )
}