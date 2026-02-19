import { useState, useEffect } from "react";
import axios from "axios";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [search, setSearch] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch employees from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/employees")
      .then((res) => {
        setEmployees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching employees:", err);
        setLoading(false);
      });
  }, []);

  // Filter employees
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.name.toLowerCase().includes(search.toLowerCase());
    const matchesDept = filterDepartment
      ? emp.departmentId === parseInt(filterDepartment)
      : true;
    return matchesSearch && matchesDept;
  });

  // Loading state
  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "#64748b" }}>
        Loading employees...
      </div>
    );
  }

  // ================= EMPLOYEE DETAILS VIEW =================
  if (selectedEmployee) {
    return (
      <div style={styles.page}>
        <div style={styles.detailsCard}>
          <button
            onClick={() => setSelectedEmployee(null)}
            style={styles.backBtn}
          >
            ← Back to Employees
          </button>

          <h1 style={styles.detailsTitle}>{selectedEmployee.name}</h1>
          <p style={styles.detailsDesc}>Role: {selectedEmployee.role}</p>
          <p style={styles.detailsDesc}>Department ID: {selectedEmployee.departmentId}</p>
          <p style={styles.detailsDesc}>Email: {selectedEmployee.email || "N/A"}</p>
        </div>
      </div>
    );
  }

  // ================= EMPLOYEE LIST VIEW =================
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>💼 Employees</h1>

        <div style={styles.filters}>
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Filter by Department ID"
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.grid}>
          {filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              style={styles.card}
              onClick={() => setSelectedEmployee(emp)}
            >
              <h3 style={styles.cardTitle}>{emp.name}</h3>
              <p style={styles.cardDesc}>Role: {emp.role}</p>
              <p style={styles.cardDesc}>Department ID: {emp.departmentId}</p>
              <div style={styles.link}>View Details →</div>
            </div>
          ))}
        </div>

        {filteredEmployees.length === 0 && (
          <p style={styles.noResult}>No employees found.</p>
        )}
      </div>
    </div>
  );
}

/* ================= INLINE STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
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
  filters: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
    flexWrap: "wrap",
  },
  input: {
    padding: "10px 12px",
    width: "200px",
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
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.07)",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#0f172a",
  },
  cardDesc: {
    fontSize: "14px",
    color: "#64748b",
  },
  link: {
    marginTop: "10px",
    color: "#2563eb",
    fontSize: "14px",
    fontWeight: "600",
  },
  noResult: {
    textAlign: "center",
    marginTop: "40px",
    color: "#64748b",
  },
  detailsCard: {
    maxWidth: "700px",
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
    lineHeight: "1.6",
  },
};




