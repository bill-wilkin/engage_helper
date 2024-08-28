import Description from '../Description/Description';
import MappingInstructions from '../MappingInstructions/MappingInstructions';
import './LeftOverview.css';

const LeftOverview = () => {
    return (
        <div id='left-overview'>
            <Description/>
            <MappingInstructions/>
        </div>
    )
}

export default LeftOverview;