import ButtonBoxStyle from './ButtonBox.css';

const ButtonBox = () => {

    return (
        <>
            <div id='button-box'>
                <button className='button'>Track</button>
                <button className='button'>Identify</button>
                <button className='button'>Group</button>
                <button id='refresh-button' className='button'>Refresh</button>
            </div>
        </>
    )
}

export default ButtonBox;