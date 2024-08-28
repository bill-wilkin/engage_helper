import ButtonBox from "../ButtonBox/ButtonBox"
import { SamplePayload } from "../SamplePayload/SamplePayload"
import { useState, useEffect } from "react";
import './Overview.css';

const Overview = () => {
    const [selectedPayloadType, setSelectedPayloadType] = useState('track');

    useEffect(() => {
        alert(selectedPayloadType);
    }, [selectedPayloadType])

    const handleButtonClick = (input) => {
        setSelectedPayloadType(input);
        // alert(selectedPayloadType);
    }

    return (
        <div id='right-overview'>
            <ButtonBox handleButtonClick={handleButtonClick}/>
            <SamplePayload />
        </div>
    )
}

export default Overview