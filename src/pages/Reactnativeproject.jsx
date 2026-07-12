import "./styles/styles.css";
import { Link } from "react-router-dom";
import projects from "./data/reactnativeproject";

const ReactNativeProject = () => {
    return (
        <div>
            <h1 className="page-title" style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>React Native Project</h1>

            <div className="courses-container">
                 {projects.map((project) => (
                    /* Wrap the card in a Link component */
                    <Link to={`/project/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="course-card">
                            <h2 className="title">{project.title}</h2>
                            <h3 className="subtitle">{project.subtitle}</h3>
                        </div>
                    </Link>
                ))}
            </div>
            <div style={{ marginTop: "30px" }}>
                <Link to="/" style={{ fontWeight: "bold", textTransform: "uppercase", textDecoration: "none", color: "black", textAlign: "end" }}>
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}

export default ReactNativeProject