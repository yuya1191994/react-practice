import ReactDOM from "react-dom";

export const App = () => {
    const onClickButton = () => {
        alert();
    }
    const contentStyle = {
        color: 'blue',
        fontSize: '20px'
    };

    return (
        <>
            { console.log('Test') }
            <h1 style={{color: 'red'}}>こんにちは！</h1>
            <p style={contentStyle}>お元気ですか？</p>
            <button onClick={onClickButton}>Click!</button>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));