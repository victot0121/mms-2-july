import { Link } from "react-router-dom";
import projects from "./data/reactnativeproject";

const ReactNativeProject = () => {
    return (
        <div>
            <h1 className="page-title" style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>React Native Project</h1>

            <div style={{ marginTop: "30px" }}>
                <Link to="/" style={{ fontWeight: "bold", textTransform: "uppercase", textDecoration: "none", color: "black", textAlign: "end" }}>
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}

export default ReactNativeProject