import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Progress from "./Progress";
import Notifications from "./Notification";
import Student from "./Student";
import Employees from "./Employees";

function Dashboard() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = ["Home", "Courses", "Progress", "Notifications", "Students","Employees", "Logout"];

  const handleMenuClick = (item) => {
    if (item === "Logout") {
      navigate("/");
    } else if (item === "Courses") {
      navigate("/my-courses");
    } else {
      setActiveMenu(item);
    }
  };

  const stats = [
    { title: "Active Students", value: 220, color: "#4a90e2" },
    { title: "Courses in Progress", value: 38, color: "#50e3c2" },
    { title: "Average Completion", value: 68, color: "#f5a623", isProgress: true },
    { title: "Certificates Issued", value: 45, color: "#d0021b" },
  ];

  const trendingCourses = [
    { name: "React Basics", completion: 75 },
    { name: "Advanced JavaScript", completion: 60 },
    { name: "Python for Data Science", completion: 90 },
    { name: "UI/UX Design Fundamentals", completion: 50 },
    { name: "Node.js & Express", completion: 80 },
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Course Dashboard</h2>
        <ul style={styles.menuList}>
          {menuItems.map((item) => (
            <li
              key={item}
              style={{
                ...styles.menuItem,
                background:
                  activeMenu === item
                    ? "linear-gradient(135deg, #4a90e2, #6fb1fc)"
                    : "transparent",
                color: activeMenu === item ? "#fff" : "#cbd5e1",
              }}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <main style={styles.main}>
        {/* HOME CONTENT */}
        {activeMenu === "Home" && (
          <>
            {/* Welcome */}
            <section style={styles.welcome}>
              <h1 style={styles.mainTitle}>Welcome to Your Course Dashboard! 👋</h1>
              <p style={styles.mainText}>
                Track students, course progress, and trending courses.
              </p>
            </section>

            {/* Stats */}
            <section style={styles.cards}>
              {stats.map((stat, index) => (
                <div key={index} style={{ ...styles.card, borderTop: `4px solid ${stat.color}` }}>
                  <h3>{stat.title}</h3>
                  {stat.isProgress ? (
                    <>
                      <p style={styles.statValue}>{stat.value}%</p>
                      <div style={styles.progressBarContainer}>
                        <div
                          style={{
                            ...styles.progressBar,
                            width: `${stat.value}%`,
                            backgroundColor: stat.color,
                          }}
                        />
                      </div>
                    </>
                  ) : (
                    <p style={styles.statValue}>{stat.value}</p>
                  )}
                </div>
              ))}
            </section>

            {/* Chart */}
            <section style={styles.activity}>
              <h2 style={styles.sectionTitle}>Trending Courses Completion</h2>
              <div style={styles.chartContainer}>
                {trendingCourses.map((course, index) => (
                  <div key={index} style={styles.chartBarWrapper}>
                    <span style={styles.courseLabel}>{course.name}</span>
                    <div style={styles.chartBarBackground}>
                      <div
                        style={{
                          ...styles.chartBar,
                          height: `${course.completion}%`,
                        }}
                      />
                    </div>
                    <span style={styles.completionText}>{course.completion}%</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Announcements */}
            <section style={styles.announcements}>
              <h2 style={styles.sectionTitle}>Announcements</h2>
              <div style={styles.announcementBox}>
                New course <b>AI for Beginners</b> launching next week 🚀
              </div>
              <div style={styles.announcementBox}>
                System maintenance scheduled for Sunday 2 AM.
              </div>
            </section>
          </>
        )}

        {/* PROGRESS CONTENT */}
        {activeMenu === "Progress" && <Progress />}

        {/* NOTIFICATIONS CONTENT */}
        {activeMenu === "Notifications" && <Notifications />}

        {activeMenu === "Students" && <Student/>}
          {activeMenu === "Employees" && <Employees />}
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "Inter, Arial, sans-serif",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
  },
  sidebar: {
    width: "230px",
    background: "linear-gradient(180deg, #1e293b, #0f172a)",
    color: "#fff",
    padding: "30px 18px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "4px 0 20px rgba(0,0,0,0.2)",
  },
  sidebarTitle: { fontSize: "22px", fontWeight: "bold", marginBottom: "30px" },
  menuList: { listStyle: "none", padding: 0 },
  menuItem: {
    padding: "12px 16px",
    borderRadius: "10px",
    marginBottom: "12px",
    cursor: "pointer",
    fontSize: "15px",
    transition: "all 0.25s ease",
  },
  main: { flex: 1, padding: "40px", overflowY: "auto" },
  mainTitle: { fontSize: "30px", marginBottom: "6px", fontWeight: "700" },
  mainText: { fontSize: "16px", color: "#64748b", marginBottom: "30px" },

  cards: { display: "flex", gap: "22px", marginBottom: "35px" },
  card: {
    flex: 1,
    background: "#ffffff",
    padding: "26px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  statValue: { fontSize: "26px", fontWeight: "700", marginTop: "8px" },

  progressBarContainer: {
    width: "100%",
    height: "8px",
    backgroundColor: "#e2e8f0",
    borderRadius: "6px",
    marginTop: "12px",
  },
  progressBar: { height: "100%", borderRadius: "6px", transition: "width 0.4s ease" },

  activity: { marginBottom: "30px" },
  sectionTitle: { fontSize: "20px", marginBottom: "16px", fontWeight: "600" },

  chartContainer: { display: "flex", gap: "20px", alignItems: "flex-end" },
  chartBarWrapper: { display: "flex", flexDirection: "column", alignItems: "center", width: "120px" },
  courseLabel: { marginBottom: "10px", textAlign: "center", fontSize: "13px", fontWeight: "600", color: "#334155" },
  chartBarBackground: {
    width: "44px",
    height: "160px",
    background: "#e2e8f0",
    borderRadius: "10px",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
  },
  chartBar: { width: "100%", background: "linear-gradient(180deg, #4a90e2, #2563eb)", borderRadius: "10px 10px 0 0" },
  completionText: { marginTop: "8px", fontSize: "12px", color: "#64748b" },

  announcements: { marginBottom: "40px" },
  announcementBox: {
    background: "#ffffff",
    padding: "14px 18px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    marginBottom: "12px",
    color: "#334155",
    fontSize: "14px",
  },

  welcome: { marginBottom: "10px" },
};

export default Dashboard;
















