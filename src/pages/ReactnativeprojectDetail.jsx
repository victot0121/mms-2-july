import { useParams, Link } from "react-router-dom";
import projects from "./data/reactnativeproject"; 
import "./styles/styles.css";



const ReactnativeprojectDetail = () => {
  const { id } = useParams();

  // Convert id to a number if your dataset IDs are integers
  const projectIdNum = Number(id);
  
  // Find the specific project matching the ID
  const project = projects.find((p) => p.id === projectIdNum);

  // Fallback UI if the project ID doesn't exist
  if (!project) {
    return (
      <div className="container">
        <h2>Project not found</h2>
        <Link to="/reactnativeproject">← Back to React Native Projects</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">{project.title}</h1>
      <h3 className="subtitle" style={{ color: "#666", marginBottom: "20px" }}>{project.subtitle}</h3>

      {/* Render description or content if your data structure has it */}
      {project.description && (
        <p className="project-description">{project.description}</p>
      )}

      {/* Example: Displaying group members if structured like your Python dataset */}
      {project.group && project.members && (
        <div className="detail-section group-card" style={{ backgroundColor: "#f4f4f4", padding: "15px", borderRadius: "8px", margin: "20px 0" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>Assigned: {project.group}</h3>
          <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
            {project.members.map((member, i) => (
              <li key={i} style={{ fontWeight: "500", margin: "5px 0" }}>{member}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation Back Link */}
      <div style={{ marginTop: "30px" }}>
        <Link
          to="/reactnativeproject"
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "black",
          }}
        >
          ← Back to React Native Projects
        </Link>
      </div>
    </div>
  )
}

export default ReactnativeprojectDetail