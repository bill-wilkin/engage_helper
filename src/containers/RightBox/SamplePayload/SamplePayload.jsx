import './SamplePayload.css'
import IconCopy16 from './Icon'
import Payload from './Payload'

export const SamplePayload = ({selectedPayloadType}) => {
    return(
        <>
            <div id='label-box'>
                <p className='label'>Payload</p>
                <p className='label'>JSON</p>
            </div>
            <article className='json-textbox'>
                <pre>
                    <code className='payload-text'>
                    <Payload selectedPayloadType={selectedPayloadType}/>
                    </code>
                </pre> 
                <button className='copy-button'>
                    <IconCopy16 />
                </button>
            </article>
        </>
    )
}