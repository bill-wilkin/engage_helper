import { useCustomContext } from "../state-management/app-context";
import Overview from "./RightBox/Overview/Overview";
import LeftOverview from "./LeftBox/LeftOverview/LeftOverview";

const MainContainer = () => {

    const { state, dispatch } = useCustomContext();

    return (
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <LeftOverview />
            <Overview />
            {/* <h2>Current Space: {state.currentSpace?.id}</h2> */}
        </div>
    )
}

export default MainContainer;