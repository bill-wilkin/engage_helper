import React from "react";
import { CopyIcon } from "./Icon";
import './SamplePayload.css'

const CopyPayload = ({ textToCopy }) => {
    const copyToClipboard = () => {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
  
    return <button className='copy-button' onClick={copyToClipboard}>
        <CopyIcon />
    </button>;
  };
  
  export default CopyPayload;