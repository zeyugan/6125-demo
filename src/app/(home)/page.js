"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

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
      <form
        style={{ maxWidth: "400px", width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form submission
          router.push("/dashboard"); // Navigate to /int/dashboard
        }}
      >
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
          Enter
        </button>
      </form>
      <footer
        style={{ position: "absolute", bottom: "20px", fontSize: "0.8rem" }}
      >
        © 2035 by Marketing Inc. Powered and secured by Wix
      </footer>
    </div>
  );
}
