"use client";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#e3f2fd", // Light blue background
        height: "100vh",
        color: "#212121",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        WE ARE LAUNCHING OUR WEBSITE SOON.
      </h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem" }}>MARKETING INC.</h2>
      <form style={{ maxWidth: "400px", width: "100%" }}>
        <input
          type="email"
          placeholder="Enter your email here *"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "1rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          required
        />
        <div style={{ marginBottom: "1rem" }}>
          <input type="checkbox" id="subscribe" />
          <label htmlFor="subscribe" style={{ marginLeft: "10px" }}>
            Yes, subscribe me to your newsletter.
          </label>
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Notify Me!
        </button>
      </form>
      <div style={{ marginTop: "2rem" }}>
        <a
          href="#"
          style={{ margin: "0 10px", color: "#007bff", fontSize: "1.5rem" }}
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="#"
          style={{ margin: "0 10px", color: "#007bff", fontSize: "1.5rem" }}
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="#"
          style={{ margin: "0 10px", color: "#007bff", fontSize: "1.5rem" }}
        >
          <i className="bi bi-instagram"></i>
        </a>
      </div>
      <footer
        style={{ position: "absolute", bottom: "20px", fontSize: "0.8rem" }}
      >
        © 2035 by Marketing Inc. Powered and secured by Wix
      </footer>
    </div>
  );
}
