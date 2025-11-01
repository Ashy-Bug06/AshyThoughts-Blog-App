import React, { useEffect, useState } from "react";
import { getThought, deleteThought } from "../api";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ReadThought() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [thought, setThought] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getThought(id)
      .then((res) => {
        setThought(res.data);
      })
      .catch(() => {
        toast.error("Could not load the thought");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this thought?")) return;
    try {
      await deleteThought(id);
      toast.success("Thought removed");
      setTimeout(() => navigate("/"), 800);
    } catch (err) {
      toast.error("Failed to delete thought");
    }
  };

  if (loading) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1d3f 0%, #2c3e77 50%, #1c4966 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}>
        <div style={{
          background: "rgba(255, 255, 255, 0.98)",
          borderRadius: "16px",
          padding: "40px 60px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}>
          <div style={{
            width: "50px",
            height: "50px",
            border: "4px solid #e1e8ed",
            borderTop: "4px solid #1c4966",
            borderRadius: "50%",
            margin: "0 auto 20px",
            animation: "spin 1s linear infinite"
          }}></div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ margin: 0, color: "#5a6c7d", fontSize: "16px" }}>Loading thought...</p>
        </div>
      </div>
    );
  }

  if (!thought) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1d3f 0%, #2c3e77 50%, #1c4966 100%)",
        padding: "40px 20px",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{
            background: "rgba(255, 255, 255, 0.98)",
            borderRadius: "16px",
            padding: "60px 40px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            textAlign: "center"
          }}>
            <h2 style={{
              fontSize: "28px",
              color: "#1c4966",
              margin: "0 0 15px 0",
              fontWeight: "700"
            }}>
              Thought Not Found
            </h2>
            <p style={{
              color: "#5a6c7d",
              fontSize: "16px",
              marginBottom: "30px"
            }}>
              The thought you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/"
              style={{
                backgroundColor: "#1c4966",
                color: "white",
                padding: "13px 28px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(28, 73, 102, 0.25)",
                textDecoration: "none",
                display: "inline-block"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#163a52";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#1c4966";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
        <ToastContainer position="bottom-right" />
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1a1d3f 0%, #2c3e77 50%, #1c4966 100%)",
      padding: "40px 20px",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ marginBottom: "30px" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              background: "transparent",
              border: "none",
              fontSize: "15px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: "0"
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "rgba(255, 255, 255, 0.8)";
            }}
          >
            Back
          </button>
        </div>

        <div style={{
          background: "rgba(255, 255, 255, 0.98)",
          borderRadius: "16px",
          padding: "50px 40px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          border: "1px solid rgba(28, 73, 102, 0.1)"
        }}>
          <h1 style={{
            fontSize: "42px",
            margin: "0 0 20px 0",
            color: "#1a1d3f",
            fontWeight: "800",
            letterSpacing: "-0.5px",
            lineHeight: "1.2"
          }}>
            {thought.title}
          </h1>

          <div style={{
            padding: "16px 20px",
            background: "linear-gradient(135deg, #f0f4f8 0%, #e1e8ed 100%)",
            borderRadius: "10px",
            marginBottom: "30px",
            borderLeft: "4px solid #1c4966"
          }}>
            <p style={{
              margin: "0 0 6px 0",
              fontSize: "14px",
              color: "#5a6c7d"
            }}>
              <strong style={{ color: "#1a1d3f", fontWeight: "600" }}>Author:</strong> {thought.author || "Anonymous"}
            </p>
            <p style={{
              margin: "0",
              fontSize: "13px",
              color: "#7a8a9d"
            }}>
              {new Date(thought.created_at).toLocaleString()}
            </p>
          </div>

          <div style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#3a4557",
            marginBottom: "35px",
            whiteSpace: "pre-wrap"
          }}>
            {thought.content}
          </div>

          <div style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            paddingTop: "25px",
            borderTop: "1px solid #e1e8ed"
          }}>
            <Link
              to={`/edit/${thought.id}`}
              style={{
                background: "#2c5f7f",
                color: "white",
                padding: "11px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 3px 10px rgba(44, 95, 127, 0.25)",
                display: "inline-block"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#234d68";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 5px 14px rgba(44, 95, 127, 0.35)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#2c5f7f";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 3px 10px rgba(44, 95, 127, 0.25)";
              }}
            >
              Edit
            </Link>

            <button
              onClick={handleDelete}
              style={{
                background: "#c44569",
                color: "white",
                padding: "11px 22px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 3px 10px rgba(196, 69, 105, 0.25)"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#a83855";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 5px 14px rgba(196, 69, 105, 0.35)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#c44569";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 3px 10px rgba(196, 69, 105, 0.25)";
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}