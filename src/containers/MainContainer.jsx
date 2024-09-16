import { useCustomContext } from "../state-management/app-context";
import Overview from "./RightBox/Overview/Overview";
import LeftOverview from "./LeftBox/LeftOverview/LeftOverview";
import { useState, useEffect } from "react";

const MainContainer = () => {

    const { state, dispatch } = useCustomContext();
    const [traits, setTraits] = useState(null);  
    const [space, setSpace] = useState(null);
    const [audience, setAudience] = useState(null);
    const [ids, setIds] = useState(null)
    
    useEffect(() => {
        if (state.updatedTraits) {
            setTraits(state.updatedTraits);
        } else {
            setTraits(state.currentTraits);            
        }
        if (state.currentSpace) {
            setSpace(state.currentSpace);
        }
        if (state.currentAudience) {
            setAudience(state.currentAudience);
        }
        if (state.currentIds) {
            setIds(state.currentIds);
        }
    }, [state]);
    

    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <LeftOverview />
            <Overview 
                idTraits={traits} 
                space={space} 
                audience={audience}
                ids={ids}
            />
        </div>
    )
}

export default MainContainer;