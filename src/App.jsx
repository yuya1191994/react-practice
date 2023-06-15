import ReactDOM from "react-dom";
import { useState } from "react";
import { Card } from "./Card";

export const App = () => {
    const [isAdmin, setIsAdmin] = useState(false)

    const onClickSwitch = () => setIsAdmin(!isAdmin)

    return (
        <div>
            {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
            <button onClick={onClickSwitch}>切り替え</button>
            <Card isAdmin={isAdmin} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));