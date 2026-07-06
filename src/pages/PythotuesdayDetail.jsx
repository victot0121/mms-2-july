import { useParams, Link } from "react-router-dom";
// We only need the one source of truth that contains both the project and the group
import projects from "./data/pythonstudents"; 
import "./styles/styles.css";

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

const PythotuesdayDetail = () => {
  const { id } = useParams();
  const projectIdNum = Number(id);
  
  // Find the project matching the ID
  const project = projects.find((p) => p.projectId === projectIdNum);

  if (!project) {
    return (
      <div className="container">
        <h2>Project not found</h2>
        <Link to="/project">← Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">{project.projectTitle}</h1>
      <p>{project.description}</p>

      {/* FIX: We read 'group' and 'members' directly from the found project object */}
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

      {renderList("Objectives", project.objectives)}
      {renderList("Requirements", project.requirements)}
      {renderList("Python Concepts Used", project.pythonConcepts)}
      {renderList("Bonus Features", project.bonusFeatures)}
      {renderList("Deliverables", project.deliverables)}

      <div style={{ marginTop: "30px" }}>
        <Link
          to="/project"
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "black",
          }}
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default PythotuesdayDetail;