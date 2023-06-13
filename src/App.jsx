import ReactDOM from "react-dom";
import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
    console.log('レンダリング')
    
    const [num, setNum] = useState(0);

    useEffect(() => {
        alert();
    }, [num]);

    const onClickButton = () => {
        setNum(num + 1);
    }

    return (
        <>
            { console.log('Test') }
            <h1 style={{color: 'red'}}>こんにちは！</h1>
            <ColoredMessage color='blue'>お元気ですか？</ColoredMessage>
            <ColoredMessage color='pink'>元気です！</ColoredMessage>
            <button onClick={onClickButton}>Click!</button>
            <p>{num}</p>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));