import './ButtonBox.css';

const ButtonBox = ({handleButtonClick}) => {

    const handleTrackButtonClick = (e) => {
        e.preventDefault();
        handleButtonClick('Track Clicked');
    }

    const handleIdentifyButtonClick = (e) => {
        e.preventDefault();
        handleButtonClick('Identify Clicked');
    }

    const handleGroupButtonClick = (e) => {
        e.preventDefault();
        handleButtonClick('Group Clicked');
    }

    const handleRefreshButtonClick = (e) => {
        e.preventDefault();
        handleButtonClick('Re Clicked');
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