import React, { useEffect, useState } from "react";
import { getThoughts, deleteThought } from "../api";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [thoughts, setThoughts] = useState([]);
  const [showLanding, setShowLanding] = useState(true);

  const loadThoughts = () => {
    getThoughts()
      .then((res) => setThoughts(res.data))
      .catch(() => toast.error("Could not load thoughts"));
  };

  useEffect(() => {
    loadThoughts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this thought?")) {
      try {
        await deleteThought(id);
        toast.success("Thought removed successfully");
        loadThoughts();
      } catch (err) {
        toast.error("Failed to delete thought");
      }
    }
  };

  if (showLanding) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1a1d3f 0%, #2c3e77 50%, #1c4966 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      }}>
        <div style={{
          maxWidth: "900px",
          textAlign: "center",
          animation: "fadeIn 1s ease-in"
        }}>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
          
          <div style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "60px 40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255, 255, 255, 0.1)"
          }}>
            <h1 style={{
              fontSize: "72px",
              margin: "0 0 20px 0",
              color: "#ffffff",
              fontWeight: "800",
              letterSpacing: "-1px",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)"
            }}>
              Ashy Thoughts
            </h1>
            
            <p style={{
              fontSize: "24px",
              color: "rgba(255, 255, 255, 0.9)",
              margin: "0 0 40px 0",
              fontWeight: "400",
              lineHeight: "1.6"
            }}>
              A space to share your ideas, stories, and perspectives with the world
            </p>

            <div style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "50px"
            }}>
              <button
                onClick={() => setShowLanding(false)}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#1c4966",
                  padding: "18px 40px",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "700",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 24px rgba(255,255,255,0.2)"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-3px) scale(1.05)";
                  e.target.style.boxShadow = "0 12px 32px rgba(255,255,255,0.3)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "0 8px 24px rgba(255,255,255,0.2)";
                }}
              >
                Explore Thoughts
              </button>

              <Link
                to="/create"
                style={{
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  padding: "18px 40px",
                  border: "2px solid rgba(255, 255, 255, 0.5)",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "700",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "inline-block"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.target.style.borderColor = "#ffffff";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.5)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Start Writing
              </Link>
            </div>
          </div>
        </div>
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
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {/* Header */}
        <div style={{
          background: "rgba(255, 255, 255, 0.98)",
          borderRadius: "16px",
          padding: "40px",
          marginBottom: "30px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          border: "1px solid rgba(28, 73, 102, 0.1)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", marginBottom: "30px" }}>
            <div>
              <h1 style={{
                fontSize: "48px",
                margin: "0 0 10px 0",
                color: "#1c4966",
                fontWeight: "800",
                letterSpacing: "-0.5px"
              }}>
                Ashy Thoughts
              </h1>
              <p style={{
                color: "#5a6c7d",
                fontSize: "17px",
                margin: "0",
                fontWeight: "400"
              }}>
                Share your thoughts and ideas with the world
              </p>
            </div>
            <button
              onClick={() => setShowLanding(true)}
              style={{
                backgroundColor: "transparent",
                color: "#1c4966",
                padding: "10px 20px",
                border: "2px solid #1c4966",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#1c4966";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#1c4966";
              }}
            >
              Back to Home
            </button>
          </div>
          
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <button
              onClick={async () => {
                try {
                  const response = await fetch("http://localhost:5000/api/posts/export/csv");
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "ashy_thoughts.csv";
                  a.click();
                  toast.success("CSV exported successfully");
                } catch (err) {
                  toast.error("Failed to export CSV");
                }
              }}
              style={{
                backgroundColor: "#1c4966",
                color: "white",
                padding: "13px 28px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(28, 73, 102, 0.25)"
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
              Export as CSV
            </button>

            <Link
              to="/create"
              style={{
                textDecoration: "none",
                backgroundColor: "#2c5f7f",
                color: "white",
                padding: "13px 28px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "600",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(44, 95, 127, 0.25)",
                display: "inline-block"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#234d68";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 6px 16px rgba(44, 95, 127, 0.35)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#2c5f7f";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(44, 95, 127, 0.25)";
              }}
            >
              Share a Thought
            </Link>
          </div>
        </div>

        {/* Thoughts List */}
        {thoughts.length === 0 ? (
          <div style={{
            background: "rgba(255, 255, 255, 0.98)",
            borderRadius: "16px",
            padding: "80px 40px",
            textAlign: "center",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            border: "1px solid rgba(28, 73, 102, 0.1)"
          }}>
            <div style={{ 
              fontSize: "64px", 
              marginBottom: "20px",
              color: "#1c4966",
              fontWeight: "300"
            }}>
              ...
            </div>
            <p style={{
              fontSize: "19px",
              color: "#5a6c7d",
              margin: 0,
              fontWeight: "500"
            }}>
              No thoughts shared yet. Be the first one!
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {thoughts.map((t) => (
              <div
                key={t.id}
                style={{
                  background: "rgba(255, 255, 255, 0.98)",
                  borderRadius: "16px",
                  padding: "35px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(28, 73, 102, 0.1)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 48px rgba(0,0,0,0.18)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)";
                }}
              >
                <h3 style={{
                  fontSize: "26px",
                  margin: "0 0 16px 0",
                  color: "#1a1d3f",
                  fontWeight: "700",
                  letterSpacing: "-0.3px"
                }}>
                  {t.title}
                </h3>
                <p style={{
                  fontSize: "16px",
                  lineHeight: "1.7",
                  color: "#3a4557",
                  margin: "0 0 24px 0",
                  fontWeight: "400"
                }}>
                  {t.content}
                </p>
                
                <div style={{
                  padding: "16px 20px",
                  background: "linear-gradient(135deg, #f0f4f8 0%, #e1e8ed 100%)",
                  borderRadius: "10px",
                  marginBottom: "24px",
                  borderLeft: "4px solid #1c4966"
                }}>
                  <p style={{
                    margin: "0 0 6px 0",
                    fontSize: "14px",
                    color: "#5a6c7d"
                  }}>
                    <strong style={{ color: "#1a1d3f", fontWeight: "600" }}>Author:</strong> {t.author || "Anonymous"}
                  </p>
                  <p style={{
                    margin: "0",
                    fontSize: "13px",
                    color: "#7a8a9d"
                  }}>
                    {new Date(t.created_at).toLocaleString()}
                  </p>
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link
                    to={`/edit/${t.id}`}
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
                    onClick={() => handleDelete(t.id)}
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
            ))}
          </div>
        )}
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
}