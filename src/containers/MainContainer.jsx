import { useCustomContext } from "../state-management/app-context";

const MainContainer = () => {

    const { state, dispatch } = useCustomContext();

    return (
        <>
            <h1>Hello World</h1>
            {/* <h2>Current Space: {state.currentSpace?.id}</h2> */}
        </>
    )
}

export default MainContainer