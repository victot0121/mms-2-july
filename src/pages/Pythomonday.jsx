import "./styles/styles.css";
import { Link } from "react-router-dom";
import pythonstudents from "./data/pythonmonday";


const Pythomonday = () => {
    return (
        <div className="container">
            <h1 className="page-title" style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>Python Monday, Wednesday and Friday Class Projects and Group Members</h1>

            <div className="courses-container">
                {pythonstudents.map((project) => (
                    <Link
                        to={`/pythomonday/${project.projectId}`}
                        key={project.projectId}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <div className="course-card">
                            <h2 className="title">{project.projectTitle}</h2>
                        </div>
                    </Link>
                ))}

            </div>

            <div style={{ marginTop: "30px" }}>
               <Link to="/secondbatch" style={{ fontWeight: "bold", textTransform: "uppercase", color: "black", textAlign: "start" }}> SECOND BATCH PROJECT</Link>
            </div>

            <div style={{ marginTop: "30px" }}>
                <Link to="/" style={{ fontWeight: "bold", textTransform: "uppercase", textDecoration: "none", color: "black", textAlign: "end" }}>
                    ← Back to Home
                </Link>
            </div>


        </div>
    )
}

export default Pythomonday