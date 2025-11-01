import React, { useState } from "react";
import { addThought } from "../api";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function CreateThought() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addThought(formData);
      toast.success("Your thought is live");
      setFormData({ title: "", content: "", author: "" });
    } catch (err) {
      toast.error("Couldn't share your thought. Try again");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1d3f 0%, #2c3e77 50%, #1c4966 100%)",
      padding: "40px 20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div style={{ marginBottom: "30px" }}>
          <Link
            to="/"
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "500",
              transition: "all 0.3s ease",
              display: "inline-block"
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "rgba(255, 255, 255, 0.8)";
            }}
          >
            Back to Thoughts
          </Link>
        </div>

        <div style={{
          background: "rgba(255, 255, 255, 0.98)",
          borderRadius: "16px",
          padding: "50px 40px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          border: "1px solid rgba(28, 73, 102, 0.1)"
        }}>
          <h2 style={{
            fontSize: "36px",
            margin: "0 0 10px 0",
            color: "#1c4966",
            fontWeight: "800",
            letterSpacing: "-0.5px"
          }}>
            Share Your Thought
          </h2>
          <p style={{
            color: "#5a6c7d",
            fontSize: "16px",
            margin: "0 0 35px 0",
            fontWeight: "400"
          }}>
            Express your ideas and connect with readers
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                color: "#1a1d3f",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "10px"
              }}>
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a captivating title"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  fontSize: "15px",
                  border: "2px solid #e1e8ed",
                  borderRadius: "10px",
                  outline: "none",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1c4966";
                  e.target.style.boxShadow = "0 0 0 3px rgba(28, 73, 102, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e1e8ed";
                  e.target.style.boxShadow = "none";
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{
                display: "block",
                color: "#1a1d3f",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "10px"
              }}>
                Content
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your thoughts here..."
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  fontSize: "15px",
                  border: "2px solid #e1e8ed",
                  borderRadius: "10px",
                  outline: "none",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                  resize: "vertical",
                  minHeight: "180px",
                  lineHeight: "1.6",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1c4966";
                  e.target.style.boxShadow = "0 0 0 3px rgba(28, 73, 102, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e1e8ed";
                  e.target.style.boxShadow = "none";
                }}
                required
              />
            </div>

            <div style={{ marginBottom: "35px" }}>
              <label style={{
                display: "block",
                color: "#1a1d3f",
                fontSize: "15px",
                fontWeight: "600",
                marginBottom: "10px"
              }}>
                Author <span style={{ color: "#7a8a9d", fontWeight: "400" }}>(optional)</span>
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Your name or stay anonymous"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  fontSize: "15px",
                  border: "2px solid #e1e8ed",
                  borderRadius: "10px",
                  outline: "none",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                  boxSizing: "border-box"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#1c4966";
                  e.target.style.boxShadow = "0 0 0 3px rgba(28, 73, 102, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e1e8ed";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: "#1c4966",
                color: "white",
                padding: "15px 40px",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(28, 73, 102, 0.25)",
                width: "100%"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#163a52";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 16px rgba(28, 73, 102, 0.35)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#1c4966";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(28, 73, 102, 0.25)";
              }}
            >
              Publish Thought
            </button>
          </form>
        </div>
      </div>
      
      <ToastContainer position="bottom-right" />
    </div>
  );
}