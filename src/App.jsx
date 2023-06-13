import ReactDOM from "react-dom";

export const App = () => {
    const onClickButton = () => {
        alert();
    }
    return (
        <>
            { console.log('Test') }
            <h1>こんにちは！</h1>
            <p>お元気ですか？</p>
            <button onClick={onClickButton}>Click!</button>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));