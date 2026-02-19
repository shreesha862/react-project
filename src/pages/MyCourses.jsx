import { useState, useEffect } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch courses from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/courses")
      .then(res => setCourses(res.data))
      .catch(err => console.error("Error fetching courses:", err));
  }, []);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase())
  );

  // ================= COURSE DETAILS VIEW =================
  if (selectedCourse) {
    return (
      <div style={styles.page}>
        <div style={styles.detailsCard}>
          <button onClick={() => setSelectedCourse(null)} style={styles.backBtn}>
            ← Back to Courses
          </button>

          <h1 style={styles.detailsTitle}>{selectedCourse.name}</h1>
          <p style={styles.detailsDesc}>
            {/* Example description if backend doesn't provide */}
            This is a detailed overview of the {selectedCourse.name} course. Learn the fundamentals, best practices, and practical projects.
          </p>

          <div style={styles.btnRow}>
            <button style={styles.primaryBtn}>Enroll Now</button>
            <button style={styles.secondaryBtn}>Preview</button>
          </div>
        </div>
      </div>
    );
  }

  // ================= COURSE LIST VIEW =================
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>📚 Courses</h1>

        <div style={styles.searchBox}>
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.grid}>
          {filteredCourses.map(course => (
            <div key={course.id} onClick={() => setSelectedCourse(course)} style={styles.card}>
              <h3 style={styles.cardTitle}>{course.name}</h3>
              <p style={styles.cardDesc}>
                {/* Optional: add description from backend if available */}
                Learn the essentials of {course.name}.
              </p>
              <div style={styles.link}>View Details →</div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <p style={styles.noResult}>No courses found.</p>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
    padding: "40px 20px",
    fontFamily: "Inter, Arial, sans-serif",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "32px",
    textAlign: "center",
    marginBottom: "25px",
    fontWeight: "700",
    color: "#1e293b",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "30px",
  },
  input: {
    padding: "12px 14px",
    width: "320px",
    borderRadius: "10px",
    border: "1px solid #cbd5e1",
    outline: "none",
    fontSize: "14px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  cardTitle: {
    marginBottom: "10px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#0f172a",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#64748b",
  },
  link: {
    marginTop: "12px",
    color: "#2563eb",
    fontSize: "14px",
    fontWeight: "600",
  },
  noResult: {
    textAlign: "center",
    marginTop: "40px",
    color: "#64748b",
  },
  /* DETAILS VIEW */
  detailsCard: {
    maxWidth: "800px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  backBtn: {
    color: "#2563eb",
    marginBottom: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  },
  detailsTitle: {
    fontSize: "28px",
    marginBottom: "12px",
    color: "#0f172a",
  },
  detailsDesc: {
    color: "#475569",
    lineHeight: "1.7",
  },
  btnRow: {
    marginTop: "26px",
    display: "flex",
    gap: "12px",
  },
  primaryBtn: {
    padding: "10px 20px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.2s",
  },
  secondaryBtn: {
    padding: "10px 20px",
    background: "#e2e8f0",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.2s",
  },
};





