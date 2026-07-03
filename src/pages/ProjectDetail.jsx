import { useParams, Link } from "react-router-dom";
import projects from "./data/project";
import students from "./data/students"; // 1. Import your students array
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

const ProjectDetail = () => {
  const { id } = useParams();
  const projectIdNum = Number(id);
  
  // Find the project matching the ID
  const project = projects.find((p) => p.id === projectIdNum);

  // 2. Find the corresponding assigned student group
  const assignedGroup = students.find((s) => s.projectId === projectIdNum);

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
      <h1 className="page-title">{project.title}</h1>
      <h3 className="subtitle">{project.subtitle}</h3>
      <p>{project.description}</p>

      {/* 3. Render the Group Members Section right at the top of detail sections */}
      {assignedGroup && (
        <div className="detail-section group-card" style={{ backgroundColor: "#f4f4f4", padding: "15px", borderRadius: "8px", margin: "20px 0" }}>
          <h3 style={{ margin: "0 0 10px 0" }}>Assigned: {assignedGroup.group}</h3>
          <ul style={{ listStyleType: "square", paddingLeft: "20px" }}>
            {assignedGroup.members.map((member, i) => (
              <li key={i} style={{ fontWeight: "500", margin: "5px 0" }}>{member}</li>
            ))}
          </ul>
        </div>
      )}

      {renderList("Technologies ", project.technologies)}
      {renderList("Features ", project.features)}
      {renderList("Customer Features", project.customerFeatures)}
      {renderList("Vendor Features", project.vendorFeatures)}
      {renderList("Admin Features", project.adminFeatures)}
      {renderList("Payment Features", project.paymentFeatures)}
      {renderList("Delivery Features", project.deliveryFeatures)}
      {renderList("Security", project.security)}
      {renderList("Quiz Topics", project.quizTopics)}
      {renderList("Difficulty Levels", project.difficultyLevels)}
      {renderList("Routes", project.routes)}
      {renderList("Extras", project.extras)}
      {renderList("APIs", project.api)}

      {project.modules && project.modules.length > 0 && (
        <div className="detail-section">
          <h3>Modules</h3>
          {project.modules.map((mod, i) => (
            <div key={i} className="module-card">
              <h4>{mod.name}</h4>
              <p>{mod.description}</p>
            </div>
          ))}
        </div>
      )}

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

export default ProjectDetail;