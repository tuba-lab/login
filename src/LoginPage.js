import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const popupRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showSignInOptions, setShowSignInOptions] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowSignInOptions(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dynamicStyles = {
    headerContainer: {
      ...styles.headerContainer,
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center",
    },
    navLinks: {
      ...styles.navLinks,
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "10px" : "18px",
    },
    logoContainer: {
      ...styles.logoContainer,
      justifyContent: isMobile ? "center" : "flex-start",
    },
    navWrapper: {
      ...styles.navWrapper,
      justifyContent: isMobile ? "flex-start" : "flex-end",
    },
    card: {
      ...styles.card,
      width: isMobile ? "90%" : "100%",
      padding: isMobile ? "20px" : "30px",
    },
    title: {
      ...styles.title,
      fontSize: isMobile ? "1rem" : "1.2rem",
    },
  };

  return (
    <div style={styles.page}>
      {/* -------- HEADER -------- */}
      <header style={styles.header}>
        <div style={dynamicStyles.headerContainer}>
          <div style={dynamicStyles.logoContainer}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkwUnVHIhrkSiLdgX6mXkeD-hi47TxsHbLQ&s"
              alt="AMU Logo"
              style={styles.logo}
            />
            <span style={dynamicStyles.title}>ALIGARH MUSLIM UNIVERSITY</span>
          </div>
          <div style={dynamicStyles.navWrapper}>
            <ul style={dynamicStyles.navLinks}>
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
              <li
                style={styles.dropdown}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span style={styles.navLink}>Links ▾</span>
                {isDropdownOpen && (
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
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* -------- LOGIN FORM -------- */}
      <main style={styles.main}>
        <div style={dynamicStyles.card}>
          <h2 style={styles.formTitle}>Login</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onClick={() => setShowSignInOptions(true)}
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

        {/* -------- POPUP BLOCK -------- */}
        {showSignInOptions && (
          <div style={styles.popupOverlay}>
            <div style={styles.popupBox} ref={popupRef}>
              <h3 style={{ color: "#004d40" }}>Sign In Options</h3>
              <button style={styles.popupBtn}>🔐 Sign in with Google</button>
              <button style={styles.popupBtn}>💻 Sign up with GitHub</button>
              <button style={styles.popupBtn}>✉️ Sign in with Email</button>
              <button
                onClick={() => setShowSignInOptions(false)}
                style={{
                  ...styles.popupBtn,
                  backgroundColor: "#ccc",
                  color: "#000",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
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
    position: "relative",
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
  popupOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  popupBox: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "90%",
    maxWidth: "400px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  popupBtn: {
    padding: "10px",
    backgroundColor: "#004d40",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: 600,
  },
};

export default LoginPage;
