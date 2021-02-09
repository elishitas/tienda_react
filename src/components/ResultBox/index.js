//ResultBox
import ResultImage from './components/ResultImage';
import ResultText from './components/ResultText';

const ResultBox = (props) => {
    return (
        <div className="result-box">
            <ResultImage imageUrl={props.mockData.imageUrl} />
            <ResultText textData={props.mockData.product} />
        </div>
    )
}


export default ResultBox;