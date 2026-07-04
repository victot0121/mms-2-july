import "./styles/styles.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const courses = [
    "MMS PROGRAM",
    "PYTHON TUESDAY CLASS",
    "PYTHON MON-WED-FRI CLASS",
  ];

  return (
    <div className="courses-container">
      {courses.map((course, index) =>
        index === 0 ? (
          <Link
            key={index}
            to="/project"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="course-card">
              <h1>{course}</h1>
            </div>
          </Link>
        ) :index === 1 ? (
           <>
              <Link
                key={index}
                to="/pythontuesday"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="course-card">
                  <h1>{course}</h1>
                </div>
              </Link>
           </>
        ):(
          <div
            key={index}
            className="course-card"
            style={{ color: "inherit", cursor: "not-allowed", opacity: 0.6 }}
          >
            <h1>{course}</h1>
          </div>
        )
      )}
    </div>
  );
};

export default HomePage;