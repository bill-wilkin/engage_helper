import ButtonBox from "../ButtonBox/ButtonBox"
import { InfoBox } from "../InfoBox/InfoBox";
import { SamplePayload } from "../SamplePayload/SamplePayload"
import { useState, useEffect } from "react";
import './Overview.css';

const Overview = ({traits}) => {
    const [selectedPayloadType, setSelectedPayloadType] = useState('track');

    const handleButtonClick = (input) => {
        setSelectedPayloadType(input);
    }

    return (
        <div id='right-overview'>
            <ButtonBox handleButtonClick={handleButtonClick}/>
            <SamplePayload selectedPayloadType={selectedPayloadType} traits={traits} />
            <InfoBox />
        </div>
    )
}

export default Overview