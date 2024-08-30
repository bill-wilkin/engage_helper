import './ButtonBox.css';

const ButtonBox = ({handleButtonClick}) => {

    const handleTrackButtonClick = (e) => {
        e.preventDefault();
        handleButtonClick('track');
    }

    const handleIdentifyButtonClick = (e) => {
        e.preventDefault();
        handleButtonClick('identify');
    }
// remove until we can determine expected funtionality of audience level traits
    // const handleGroupButtonClick = (e) => {
    //     e.preventDefault();
    //     handleButtonClick('group');
    // }

    const handleRefreshButtonClick = (e) => {
        e.preventDefault();
        chrome.tabs.reload();

    }

    return (
        <>
            <div id='button-box'>
                <div>
                    <button className='button' onClick={handleTrackButtonClick}>Track</button>
                    <button className='button'onClick={handleIdentifyButtonClick}> Identify</button>
                    {/* <button className='button' onClick={handleGroupButtonClick}>Group</button> */}
                </div>
                <div>
                    <button id='refresh-button' className='button' onClick={handleRefreshButtonClick}>Refresh Webpage</button>
                </div>
            </div>
        </>
    )
}

export default ButtonBox;