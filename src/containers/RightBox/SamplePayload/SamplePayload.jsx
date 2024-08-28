import './SamplePayload.css'
import IconCopy16 from './Icon'
import payload from './Payload'

export const SamplePayload = () => {
    return(
        <>
            <div id='label-box'>
                <p className='label'>Payload</p>
                <p className='label'>JSON</p>
            </div>
            <article className='json-textbox'>
                <pre>
                    <code className='payload-text'>
                        {JSON.stringify(payload, null, 2)}
                    </code>
                </pre> 
                <button className='copy-button'>
                    <IconCopy16 />
                </button>
            </article>
        </>
    )
}