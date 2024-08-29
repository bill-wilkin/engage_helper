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

    const handleGroupButtonClick = (e) => {
        e.preventDefault();
        handleButtonClick('group');
    }

    const handleRefreshButtonClick = (e) => {
        e.preventDefault();
        alert('Refresh Clicked');
    }

    return (
        <>
            <div id='button-box'>
                <button className='button' onClick={handleTrackButtonClick}>Track</button>
                <button className='button'onClick={handleIdentifyButtonClick}> Identify</button>
                <button className='button' onClick={handleGroupButtonClick}>Group</button>
                <button id='refresh-button' className='button' onClick={handleRefreshButtonClick}>Refresh</button>
            </div>
        </>
    )
}

export default ButtonBox;