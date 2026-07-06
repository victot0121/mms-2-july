import "./styles/styles.css";
import { Link } from "react-router-dom";
import pythonstudents from "./data/pythonprojectlist";



const Pythontuesday = () => {
  return (
    <div className="container">
      <h1 className="page-title" style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>Python Tuesday Projects and Group Members</h1>



      <div className="courses-container">
        {pythonstudents.map((project) => (
          /* Wrap the card in a Link component */
          // <Link to={`/pythontuesday/${project.id}`} key={project.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Link
            to={`/pythontuesday/${project.projectId}`}
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
        <Link to="/" style={{ fontWeight: "bold", textTransform: "uppercase", textDecoration: "none", color: "black", textAlign: "end" }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Pythontuesday