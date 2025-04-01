import React from "react";

const About: React.FC = () => {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0f172a,rgb(46, 52, 63))",
        color: "#E2E8F0",
        padding: "80px 6.5%",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: "5rem",
            fontWeight: "bold",
            background:
              "linear-gradient(90deg,rgb(153, 212, 238),rgb(144, 45, 236))",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginTop: "0.5rem",
            marginBottom: "5rem",
          }}
        >
          About PrepSmart
        </h2>

        {/* Introduction */}
        <p style={{ fontSize: "1.2rem", marginBottom: "30px", opacity: 0.8 }}>
          PrepSmart is an AI-powered mock interview platform built to redefine
          job interview preparation. Traditional methods lack **real-time AI
          feedback**—we fix that!
        </p>

        {/* Unique Value Proposition */}
        <div
          style={{
            background: "rgba(30, 41, 59, 0.9)",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{ fontSize: "2rem", color: "#FFFFFF", marginBottom: "10px" }}
          >
            Why PrepSmart?
          </h3>
          <p style={{ opacity: 0.9 }}>
            Our *AI-driven* platform provides *instant feedback* on clarity,
            structure, and overall impact—*making you job-ready faster!*
          </p>
        </div>

        <div
          style={{
            background: "rgba(30, 41, 59, 0.9)",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{ fontSize: "2rem", color: "#38BDF8", marginBottom: "15px" }}
          >
            Transforming Interview Prep
          </h3>
          <ul
            style={{
              textAlign: "left",
              margin: "auto",
              display: "inline-block",
            }}
          >
            <li>✔ AI-POWERED speech & body language analysis</li>
            <li>✔ Track growth with interactive DASHBOARDS</li>
            <li>✔ REAL-WORLD scenario-based simulations</li>
            <li>✔ Tailored FEEDBACK based on top hiring practices.</li>
          </ul>
        </div>

        <div
          style={{
            background: "rgba(30, 41, 59, 0.9)",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)",
            marginBottom: "30px",
          }}
        >
          <h3
            style={{ fontSize: "2rem", color: "#EC4899", marginBottom: "15px" }}
          >
            What’s Next?
          </h3>
          <p>We’re evolving into a full AI career assistant with:</p>
          <ul
            style={{
              textAlign: "left",
              margin: "auto",
              display: "inline-block",
            }}
          >
            <li>Resume & Cover Letter AI analysis</li>
            <li>Speech & Voice Modulation AI.</li>
            <li>Multi-language support for diverse users.</li>
            <li>Job-based interview simulations.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div style={{ marginTop: "20px" }}>
          <a
            href="/generate"
            style={{
              display: "inline-block",
              padding: "15px 30px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#fff",
              background: "linear-gradient(90deg, #8B5CF6, #EC4899)",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(139, 92, 246, 0.5)",
              transition: "all 0.3s ease-in-out",
              textDecoration: "none",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Start Your AI-Powered Journey 🚀
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
