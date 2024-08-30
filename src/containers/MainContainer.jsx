import { useCustomContext } from "../state-management/app-context";
import Overview from "./RightBox/Overview/Overview";
import LeftOverview from "./LeftBox/LeftOverview/LeftOverview";
import { useState, useEffect } from "react";

const MainContainer = () => {

    const { state, dispatch } = useCustomContext();
    const [traits, setTraits] = useState(null);  
    
    useEffect(() => {
        if (state.updatedTraits) {
            setTraits(state.updatedTraits);
        } else {
            setTraits(state.currentTraits);            
        }
    },[state.currentTraits, state.updatedTraits]);
    


    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <LeftOverview />
            <Overview traits={traits}/>
        </div>
    )
}

export default MainContainer;