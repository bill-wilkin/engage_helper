import { useCustomContext } from "../state-management/app-context";
import Overview from "./RightBox/Overview/Overview";

const MainContainer = () => {

    const { state, dispatch } = useCustomContext();

    return (
        <>
            <Overview />
            {/* <h2>Current Space: {state.currentSpace?.id}</h2> */}
        </>
    )
}

export default MainContainer