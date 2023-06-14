import ReactDOM from "react-dom";
import { ColoredMessage as C } from "./components/ColoredMessage";
import { useState } from "react";
import { useEffect } from "react";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./Emotion";

export const App = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log('useEffect()')
    }, [num]);

    const onClickButton = () => {
        setNum(num + 1);
    }

    return (
        <>
            { console.log('Test') }
            <h1 style={{color: 'red'}}>こんにちは！</h1>
            <C color='blue'>お元気ですか？</C>
            <C color='pink'>元気です！</C>
            <button onClick={onClickButton}>Click!</button>
            <p>{num}</p>
            <CssModules />
            <StyledJsx />
            <StyledComponents />
            <Emotion />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));