import ReactDOM from "react-dom";

export const App = () => {
    return (
        <>
            { console.log('Test') }
            <h1>こんにちは！</h1>
            <p>お元気ですか？</p>
            <button>Click!</button>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));