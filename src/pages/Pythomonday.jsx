import "./styles/styles.css";
import { Link } from "react-router-dom";

const Pythomonday = () => {
    return (
        <div className="container">
            <h1 className="page-title" style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>Python Monday, Wednesday and Friday Class Projects and Group Members</h1>

            <div className="courses-container">


            </div>

            <div style={{ marginTop: "30px" }}>
                <Link to="/" style={{ fontWeight: "bold", textTransform: "uppercase", textDecoration: "none", color: "black", textAlign: "end" }}>
                    ← Back to Home
                </Link>
            </div>


        </div>
    )
}

export default Pythomonday