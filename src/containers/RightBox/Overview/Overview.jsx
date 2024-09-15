import ButtonBox from "../ButtonBox/ButtonBox"
import { InfoBox } from "../InfoBox/InfoBox";
import { SamplePayload } from "../SamplePayload/SamplePayload"
import { useState } from "react";
import './Overview.css';

const Overview = ({idTraits, space, audience, ids}) => {
    const [selectedPayloadType, setSelectedPayloadType] = useState('track');


    const handleButtonClick = (input) => {
        setSelectedPayloadType(input);
    }

    return (
        <div id='right-overview'>
            <ButtonBox 
                handleButtonClick={handleButtonClick}
            />
            {!idTraits ? 
            
                <InfoBox /> : 
                <SamplePayload 
                selectedPayloadType={selectedPayloadType} idTraits={idTraits} 
                audience={audience}
                space={space}
                ids={ids}
                /> 
             } 
    
        </div>
    )
}

export default Overview