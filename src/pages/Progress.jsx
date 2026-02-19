import React from "react";

function Progress() {
  const coursesProgress = [
    { name: "React Basics", progress: 75 },
    { name: "Advanced JavaScript", progress: 60 },
    { name: "Python for Data Science", progress: 90 },
    { name: "UI/UX Design Fundamentals", progress: 50 },
    { name: "Node.js & Express", progress: 80 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Learning Progress 📈</h2>

      {coursesProgress.map((course, index) => (
        <div key={index} style={styles.courseBox}>
          <div style={styles.courseHeader}>
            <span>{course.name}</span>
            <span>{course.progress}%</span>
          </div>

          <div style={styles.progressBarBg}>
            <div
              style={{
                ...styles.progressBarFill,
                width: `${course.progress}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  },
  title: {
    fontSize: "22px",
    marginBottom: "20px",
    fontWeight: "600",
    color: "#1e293b",
  },
  courseBox: {
    marginBottom: "18px",
  },
  courseHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "6px",
    fontSize: "14px",
    fontWeight: "500",
    color: "#334155",
  },
  progressBarBg: {
    width: "100%",
    height: "10px",
    background: "#e2e8f0",
    borderRadius: "6px",
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    background: "linear-gradient(90deg, #4a90e2, #2563eb)",
    borderRadius: "6px",
    transition: "width 0.4s ease",
  },
};

export default Progress;

