import './InfoBox.css'
import IconInfoTwentyFour from './InfoIcon'

export const InfoBox = () => {
    return(
        <div className='infobox-container'>
            <IconInfoTwentyFour />
            <article className='information-container'>
                <p className='information-not-configured'>
                    Trait Activation is not currently configured.
                </p>
                <p className='information'>
                To configure Trait Activation, navigate to the 'Traits and identifiers' tab and select the identifiers and traits you want to include. After making your selections, save your changes to generate a sample payload.
                </p>
            </article>
        </div>
     
    )
}