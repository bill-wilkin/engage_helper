import './SamplePayload.css'
import copyIcon from './../../../assets/copy-icon.png'
import IconCopy16 from './Icon'

export const SamplePayload = () => {
    return(
        <article className='json-textbox'>
           <pre>
                <code className='payload-text'>
                    &#123;
                    "messageId": "segment-test-message-l1ux2",
                    "timestamp": "2024-08-27T18:20:37.502Z",
                    "type": "track",
                    "email": "test@example.org",
                    "projectId": "dHzXPHgdov7ygtezASDbbM",
                    "properties": &#123;
                        "property1": 1,
                        "property2": "test",
                        "property3": true
                        &#125;,
                    "userId": "test-user-ciiss8",
                    "event": "Segment Test Event Name"
                    &#125;
                </code>
            </pre> 
            <button className='copy-button'>
                <IconCopy16 />
            </button>
        </article>
    )
}