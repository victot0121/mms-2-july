import { useParams, Link } from "react-router-dom";
import pythonstudents from "./data/PythonSecondBatch";

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

const PythonsecondbatchDetails = () => {
  const { id } = useParams();

  const projectIdNum = Number(id);

  const project = pythonstudents.find(
    (p) => p.projectId === projectIdNum
  );

  if (!project) {
    return (
      <div className="container">
        <h2>Project not found</h2>

        <Link to="/secondbatch">
          ← Back to Second Batch Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">
        {project.projectTitle}
      </h1>

      <p>{project.description}</p>

      {/* STUDENT */}
      {project.student && (
        <div
          className="detail-section group-card"
          style={{
            backgroundColor: "#f4f4f4",
            padding: "15px",
            borderRadius: "8px",
            margin: "20px 0",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0" }}>
            Assigned Student
          </h3>

          <p
            style={{
              fontWeight: "500",
              margin: 0,
            }}
          >
            {project.student}
          </p>
        </div>
      )}

      {renderList("Objectives", project.objectives)}

      {renderList("Requirements", project.requirements)}

      {renderList(
        "Python Concepts Used",
        project.pythonConcepts
      )}

      {renderList(
        "Bonus Features",
        project.bonusFeatures
      )}

      {renderList(
        "Deliverables",
        project.deliverables
      )}

      <div style={{ marginTop: "30px" }}>
        <Link
          to="/secondbatch"
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "black",
          }}
        >
          ← Back to Second Batch Projects
        </Link>
      </div>
    </div>
  );
};

export default PythonsecondbatchDetails;