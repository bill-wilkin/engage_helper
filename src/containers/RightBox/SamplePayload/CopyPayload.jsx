import React from "react";
import { useState } from "react";
import { CopyIcon, CopySuccessIcon } from "./Icon";
import './SamplePayload.css'

const CopyPayload = ({ textToCopy }) => {
    const [copySuccess, setCopySuccess] = useState(false)

    const successfulCopy = () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1000); 
    }

    const copyToClipboard = () => {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        successfulCopy();
    }
  
    return (
        <div className="copy-success-container">
          {copySuccess ?  
            <div className="copy-success"> <CopySuccessIcon /> </div> :
            <button className="copy-button" onClick={copyToClipboard}>
              <CopyIcon /> 
            </button> 
          }
        </div>
    )
  };
  
  export default CopyPayload;