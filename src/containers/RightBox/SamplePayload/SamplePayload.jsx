import './SamplePayload.css'
import IconCopy16 from './Icon'
import Payload from './Payload'
import CopyPayload from './CopyPayload'

export const SamplePayload = ({selectedPayloadType, traits, space, audience}) => {
    return(
        <>
            <div id='label-box'>
                <p className='label'>Payload</p>
                <p className='label'>JSON</p>
            </div>
            <article className='json-textbox'>
                <pre>
                    <code className='payload-text'>
                    <Payload 
                        selectedPayloadType={selectedPayloadType} 
                        traits={traits}
                        space={space}
                        audience={audience}
                    />
                    </code>
                </pre> 
            </article>
        </>
    )
}