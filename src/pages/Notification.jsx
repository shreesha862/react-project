import React from "react";

function Notifications() {
  const trendingNews = [
    "🚀 AI tools are transforming software development in 2026.",
    "📊 Data Science jobs see 35% growth worldwide.",
    "💻 React introduces faster rendering improvements.",
    "🔐 Cybersecurity demand rises due to global threats.",
    "☁️ Cloud computing dominates modern app deployment.",
    "📱 Mobile apps account for 65% of all internet traffic.",
    "🧠 Generative AI reshapes content creation and design.",
    "🔎 Search engines increasingly use AI for ranking.",
    "💼 Remote work tools adoption up 50% since 2023.",
    "📈 Web3 developer demand increasing in blockchain.",
    "🛡 Zero-trust security architectures becoming standard.",
    "🤖 Automation saving hours in repetitive workflows.",
    "🌐 Growth in cloud-native and serverless applications.",
    "📦 DevOps best practices improve deployment speed.",
    "📚 Major universities offer free online AI courses.",
    "💡 Startup funding for AI/ML companies hits record highs.",
    "📉 Legacy systems are being phased out rapidly.",
    "🧪 Experimental quantum computing research expands.",
    "📢 Tech conferences back in full force this year.",
    "🧩 Cross-platform development tools gain popularity."
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Trending Tech News 📰</h2>

      {trendingNews.map((news, index) => (
        <div key={index} style={styles.newsBox}>
          {news}
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
  newsBox: {
    background: "#f8fafc",
    padding: "14px 18px",
    borderRadius: "12px",
    marginBottom: "12px",
    fontSize: "14px",
    color: "#334155",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
};

export default Notifications;
