import { Link } from "react-router-dom";
import pythonstudents from "./data/PythonSecondBatch";

const Pythonsecondbatch = () => {
  return (
    <div className="container">
      <h1
        className="page-title"
        style={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        Python Monday, Wednesday and Friday Class Projects
        <br />
        Second Batch
      </h1>

      <div className="courses-container">
        {pythonstudents.map((project) => (
          <Link
            to={`/secondbatch/${project.projectId}`}
            key={project.projectId}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div className="course-card">
              <h2 className="title">{project.projectTitle}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: "30px" }}>
        <Link
          to="/"
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            textDecoration: "none",
            color: "black",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Pythonsecondbatch;