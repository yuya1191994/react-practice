import ReactDOM from "react-dom";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert();
    }

    return (
        <>
            { console.log('Test') }
            <h1 style={{color: 'red'}}>こんにちは！</h1>
            <ColoredMessage color='blue' message='お元気ですか？' />
            <ColoredMessage color='pink' message='元気です！' />
            <button onClick={onClickButton}>Click!</button>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));