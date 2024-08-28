import './MappingInstructions.css';

const MappingInstructions = () => {
    return (
        <div id='mapping-instructions'>
            <p id='header'>Using the Generated Payload to Configure Actions Mappings</p>
            <ol id='list'>
                <li>
                Generate Payload: After setting up and saving Trait Activation in Segment, a payload with your desired traits and identifiers will be generated in the Trait Activation Visualizer.
                </li>
                <li>
                Copy Payload: Click the ‘copy’ icon to copy your generated payload.
                </li>
                <li>
                Access Actions Mappings: Back in Segment, select the "Matching Mappings" tab. Here, you can create a new mapping by selecting ‘Add Mapping’ or modify an existing one by clicking the three dots and choosing ‘Edit mapping in Connections’.
                </li>
                <li>
                Paste Payload: In the mapping editor, under ‘Add test event’, paste your copied payload.
                </li>
                <li>
                Map Traits and Identifiers: Map the payload's traits and identifiers with the destination's expected fields.
                </li>
                <li>
                Test Configuration: Use ‘Send test event’ to ensure your data is correctly mapped and sent.
                </li>
                <li>
                Save Configuration: Once confirmed, click ‘Save’ to finalize your mapping setup.
                </li>
            </ol>
        </div>
    )
}

export default MappingInstructions;