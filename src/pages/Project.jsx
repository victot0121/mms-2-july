import "./styles/styles.css";
import { Link } from "react-router-dom";
import projects from "./data/project";
import { LuSquareArrowUpRight } from "react-icons/lu";



const Project = () => {

    return (
        <div className="container">
            <h1 className="page-title" style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>React  Projects and Group Members</h1>

            <Link to="/reactnativeproject" style={{ textDecoration: "none",  hover: { textDecoration: "underline" , color: "blue"} }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
                    <h2 style={{ fontWeight: "bold", textTransform: "uppercase", textDecoration: "none",textAlign: "center" , color: "black"}}>React Native Project Link</h2>
                    <LuSquareArrowUpRight />
                </div>
            </Link>

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
    );
};

export default Project;