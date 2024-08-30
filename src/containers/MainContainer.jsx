import { useCustomContext } from "../state-management/app-context";
import Overview from "./RightBox/Overview/Overview";
import LeftOverview from "./LeftBox/LeftOverview/LeftOverview";
import { useState, useEffect } from "react";

const MainContainer = () => {

    const { state, dispatch } = useCustomContext();
    const [traits, setTraits] = useState(null);  
    const [space, setSpace] = useState(null);
    const [audience, setAudience] = useState(null);
    
    useEffect(() => {
        if (state.currentTraits) {
            setTraits(state.currentTraits);
        }
        if (state.currentSpace) {
            setSpace(state.currentSpace);
        }
        if (state.currentAudience) {
            setAudience(state.currentAudience);
        }
    }, [state]);
    

    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <LeftOverview />
            <Overview 
                traits={traits} 
                space={space} 
                audience={audience}
            />
        </div>
    )
}

export default MainContainer;