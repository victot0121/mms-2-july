import { useParams, Link } from "react-router-dom";
import projects from "./data/reactnativeproject"; 
import "./styles/styles.css";

// 1. ADD THIS HELPER FUNCTION HERE
const renderList = (title, items) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="detail-section">
      <h3>{title}</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ReactnativeprojectDetail = () => {
  const { id } = useParams();
  const projectIdNum = Number(id);
  
  const project = projects.find((p) => p.id === projectIdNum);

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

      {project.description && (
        <p className="project-description">{project.description}</p>
      )}

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

      {/* 2. THESE WILL NOW WORK PROPERLY */}
      {renderList("Modules", project.modules)}
      {renderList("Technologies", project.technologies)}
      {renderList("Features", project.features)}
      {/* Changed label from Python to React Native to match this page */}
      {renderList("API Endpoints", project.api)}
      
      {/* {renderList("React Native Concepts Used", project.reactNativeConcepts || project.pythonConcepts)}
      {renderList("Bonus Features", project.bonusFeatures)}
      {renderList("Deliverables", project.deliverables)} */}

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

export default ReactnativeprojectDetail;