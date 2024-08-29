import { useCustomContext } from "../state-management/app-context";
import Overview from "./RightBox/Overview/Overview";
import LeftOverview from "./LeftBox/LeftOverview/LeftOverview";

const MainContainer = () => {

    const { state, dispatch } = useCustomContext();

    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <h1>{state.currentAudience && state.currentAudience?.id}</h1>
            {/* Note:  I'm using "age" because that was a trait I had in my trait enrichment and if I try to pass the whole object, the whole page won't render */}
            <h1>Current Traits: {state.currentTraits && state.currentTraits?.age}</h1> 
            <Overview />
            {/* <h2>Current Space: {state.currentSpace?.id}</h2> */}
        </div>
    )
}

export default MainContainer;