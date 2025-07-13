import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials");
    }
  };

  useEffect(() => {
    const applyResponsiveStyles = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        styles.headerContainer.flexDirection = "column";
        styles.headerContainer.alignItems = "flex-start";
        styles.navLinks.flexDirection = "column";
        styles.navLinks.gap = "10px";
        styles.logoContainer.justifyContent = "center";
        styles.navWrapper.justifyContent = "flex-start";
        styles.card.width = "90%";
        styles.card.padding = "20px";
        styles.title.fontSize = "1rem";
      } else {
        styles.headerContainer.flexDirection = "row";
        styles.navLinks.flexDirection = "row";
        styles.navLinks.gap = "18px";
        styles.navWrapper.justifyContent = "flex-end";
        styles.card.width = "100%";
      }
    };

    applyResponsiveStyles(); // Call on mount
    window.addEventListener("resize", applyResponsiveStyles);
    return () => window.removeEventListener("resize", applyResponsiveStyles);
  }, []);

  return (
    <div style={styles.page}>
      {/* -------- HEADER -------- */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div style={styles.logoContainer}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkwUnVHIhrkSiLdgX6mXkeD-hi47TxsHbLQ&s"
              alt="AMU Logo"
              style={styles.logo}
            />
            <span style={styles.title}>ALIGARH MUSLIM UNIVERSITY</span>
          </div>
          <div style={styles.navWrapper}>
            <ul style={styles.navLinks}>
              <li>
                <a href="/" style={styles.navLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" style={styles.navLink}>
                  About
                </a>
              </li>
              <li>
                <a href="#programs" style={styles.navLink}>
                  Programs
                </a>
              </li>
              <li>
                <a href="#faculty" style={styles.navLink}>
                  Faculty
                </a>
              </li>
              <li>
                <a href="#contact" style={styles.navLink}>
                  Contact
                </a>
              </li>
              <li style={styles.dropdown}>
                <span style={styles.navLink}>Links ▾</span>
                <ul style={styles.dropdownContent}>
                  <li>
                    <a href="#library" style={styles.dropdownItem}>
                      Library
                    </a>
                  </li>
                  <li>
                    <a href="#alumni" style={styles.dropdownItem}>
                      Alumni
                    </a>
                  </li>
                  <li>
                    <a href="#portal" style={styles.dropdownItem}>
                      Student Portal
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* -------- LOGIN FORM -------- */}
      <main style={styles.main}>
        <div style={styles.card}>
          <h2 style={styles.formTitle}>Login</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Login
            </button>
          </form>
        </div>
      </main>

      {/* -------- FOOTER -------- */}
      <footer style={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Department of Computer Science, AMU
        </p>
      </footer>
    </div>
  );
};

const styles = {
  amuGreen: "#004d40",
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#065e52",
    textTransform: "uppercase",
  },
  page: {
    fontFamily: "Segoe UI, sans-serif",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#ffffff",
    padding: "8px 20px",
    borderBottom: "4px solid #065e52",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
    width: "100%",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  navWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  logo: {
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "18px",
    margin: 0,
    padding: 0,
    alignItems: "center",
    fontSize: "0.95rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#065e52",
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.3s",
  },
  dropdown: {
    position: "relative",
  },
  dropdownContent: {
    display: "none",
    position: "absolute",
    top: "30px",
    left: 0,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    listStyle: "none",
    padding: "8px 0",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
  dropdownItem: {
    padding: "8px 16px",
    color: "#004d40",
    textDecoration: "none",
    display: "block",
  },
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    background: "#f7f7f7",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    width: "100%",
    margin: "0 10px",
  },
  formTitle: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#004d40",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontWeight: "600",
    color: "#333",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    backgroundColor: "#004d40",
    color: "#fff",
    padding: "10px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  footer: {
    backgroundColor: "#ffffff",
    padding: "15px 0",
    textAlign: "center",
    color: "#004d40",
    borderTop: "1px solid #ddd",
  },
};

// Dropdown hover effect
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector("li[style*='position: relative']");
    const menu = dropdown?.querySelector("ul");
    if (dropdown && menu) {
      dropdown.addEventListener(
        "mouseenter",
        () => (menu.style.display = "block")
      );
      dropdown.addEventListener(
        "mouseleave",
        () => (menu.style.display = "none")
      );
    }
  });
}

export default LoginPage;
