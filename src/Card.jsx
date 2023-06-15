import { EditButton } from "./EditButton";
import { memo } from "react";

const style = {
    width: "300px",
    height: "200px",
    margin: "8px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

export const Card = memo((props) => {
    const { isAdmin } = props;
    
    return (
        <div style={style}>
            <p>山田太郎</p>
            <EditButton isAdmin={isAdmin} />
        </div>
    )
})