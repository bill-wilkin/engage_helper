import ButtonBox from "../ButtonBox/ButtonBox"
import { SamplePayload } from "../SamplePayload/SamplePayload"
import './Overview.css';

const Overview = () => {

    const handleButtonClick = (input) => {
        alert(input)
    }

    return (
        <div id='right-overview'>
            <ButtonBox handleButtonClick={handleButtonClick}/>
            <SamplePayload />
        </div>
    )
}

export default Overview