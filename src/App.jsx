import ReactDOM from "react-dom";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert();
    }
    const contentPinkStyle = {
        color: 'pink',
        fontSize: '20px'
    };

    return (
        <>
            { console.log('Test') }
            <h1 style={{color: 'red'}}>こんにちは！</h1>
            <ColoredMessage />
            <p style={contentPinkStyle}>元気です！</p>
            <button onClick={onClickButton}>Click!</button>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));