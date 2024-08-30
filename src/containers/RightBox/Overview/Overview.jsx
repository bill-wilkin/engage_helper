import ButtonBox from "../ButtonBox/ButtonBox"
import { InfoBox } from "../InfoBox/InfoBox";
import { SamplePayload } from "../SamplePayload/SamplePayload"
import { useState } from "react";
import './Overview.css';

const Overview = ({traits, space, audience}) => {
    const [selectedPayloadType, setSelectedPayloadType] = useState('track');


    const handleButtonClick = (input) => {
        setSelectedPayloadType(input);
    }

    return (
        <div id='right-overview'>
            <ButtonBox 
                handleButtonClick={handleButtonClick}
            />
            {!traits ? 
            
                <InfoBox /> : 
                <SamplePayload 
                selectedPayloadType={selectedPayloadType} traits={traits} 
                audience={audience}
                space={space}
                /> 
             } 
    
        </div>
    )
}

export default Overview