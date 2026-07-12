import { useParams, Link } from "react-router-dom";
import projects from "./data/reactnativeproject"; 
import "./styles/styles.css";
import students from './data/reactnativestudents'

// 1. Helper function to safely render arrays of strings
const renderList = (title, items) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="detail-section" style={{ marginBottom: "20px" }}>
      <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", textTransform: "uppercase", fontSize: "16px", color: "#333" }}>
        {title}
      </h3>
      <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
        {items.map((item, i) => (
          <li key={i} style={{ margin: "6px 0", color: "#444" }}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ReactnativeprojectDetail = () => {
  const { id } = useParams();
  const projectIdNum = Number(id);
  
  // Find the specific project matching the URL ID
  const project = projects.find((p) => p.id === projectIdNum);

  // Fallback UI if the project ID doesn't exist in your array
  if (!project) {
    return (
      <div className="container">
        <h2>Project not found</h2>
        <Link to="/reactnativeproject" style={{ color: "blue", textDecoration: "underline" }}>
          ← Back to React Native Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 className="page-title" style={{ marginBottom: "5px" }}>{project.title}</h1>
      <h3 className="subtitle" style={{ color: "#666", marginBottom: "15px", fontWeight: "normal" }}>
        {project.subtitle}
      </h3>
      
      {/* Difficulty Badge */}
      <div style={{ marginBottom: "20px" }}>
        {/* <span style={{ 
          backgroundColor: project.difficulty === "Advanced" ? "#ffebee" : "#e8f5e9", 
          color: project.difficulty === "Advanced" ? "#c62828" : "#2e7d32", 
          padding: "6px 12px", 
          borderRadius: "4px", 
          fontSize: "13px", 
          fontWeight: "bold",
          textTransform: "uppercase"
        }}>
          Difficulty: {project.difficulty}
        </span> */}
        

        {/* members for each project */}
       
      </div>


      {/* Project Main Description */}
      {project.description && (
        <p className="project-description" style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "30px", color: "#333" }}>
          {project.description}
        </p>
      )}

       {project.members && (
          <div style={{ marginTop: "10px", fontSize: "14px",marginLeft: "5px", marginBottom: "20px" }}>
            <strong style={{fontSize: "25px", fontWeight: "bolder"}}>Project Members:</strong>
            <ul style={{ margin: "5px 0 0 5px", padding: "0" }}>
              {project.members.map((member, i) => (
                <li key={i} style={{ margin: "3px 0" }}>
                  {member}
                </li>
              ))}
            </ul>
          </div>
        )}

      {/* --- RENDER STRINGS ARRAYS (Using helper function) --- */}
      {renderList("Technologies Used", project.technologies)}
      {renderList("Core Features", project.features)}
      
      {/* Flexible parsing for multi-role platform apps (QuickBite, InternLink, HouseLag) */}
      {renderList("Customer / Seeker / Tenant Features", project.customerFeatures || project.seekerFeatures || project.tenantFeatures)}
      {renderList("Restaurant / Company / Agent Features", project.restaurantFeatures || project.companyFeatures || project.agentFeatures)}
      {renderList("Driver / Admin Features", project.driverFeatures || project.adminFeatures)}
      
      {/* Security, Trust and Payments */}
      {renderList("Payment Integration", project.paymentFeatures)}
      {renderList("Security & Badges", project.security || project.trustFeatures)}
      {renderList("Integrated Third-Party APIs", project.api)}

      {/* --- RENDER OBJECTS ARRAYS (Handled explicitly here to prevent Object Crash) --- */}
      {project.modules && project.modules.length > 0 && (
        <div className="detail-section" style={{ marginTop: "25px", marginBottom: "20px" }}>
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "5px", textTransform: "uppercase", fontSize: "16px", color: "#333" }}>
            Core Project Modules
          </h3>
          <div style={{ marginTop: "12px" }}>
            {project.modules.map((mod, index) => (
              <div key={index} style={{ marginBottom: "12px", backgroundColor: "#f9f9f9", padding: "12px", borderRadius: "6px"}}>
                <strong style={{ color: "#222", fontSize: "15px" }}>{mod.name}</strong>
                <p style={{ margin: "4px 0 0 0", color: "#555", fontSize: "14px", lineHeight: "1.4" }}>{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation Back Link */}
      <div style={{ marginTop: "40px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        <Link
          to="/reactnativeproject"
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "black",
            fontSize: "14px"
          }}
        >
          ← Back to React Native Projects
        </Link>
      </div>
    </div>
  );
};

export default ReactnativeprojectDetail;