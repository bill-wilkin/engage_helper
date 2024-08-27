import ButtonBoxStyle from './ButtonBox.css';

const ButtonBox = () => {

    return (
        <>
            <div id='button-box'>
                <button>Track</button>
                <button>Identify</button>
                <button>Group</button>
                <button id='refresh-button'>Refresh</button>
            </div>
        </>
    )
}

export default ButtonBox