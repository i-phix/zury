import { useState } from "react";

const blogPosts = {
  featured: {
    category: "HOA/CONDO",
    title: "2026 homeowner satisfaction survey: Are people happy in HOAs?",
    excerpt:
      "We were lucky enough to get a preview of the 2026 edition of the Homeowner Satisfaction Survey from Jake Gold, executive director of CAI's Foundation for Community Association Research.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    href: "#",
  },
  sidebar: [
    {
      category: "NEWS",
      title: "  Zuri spring 2026 update",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&q=80",
      href: "#",
    },
    {
      category: "NEWS",
      title: "2026 federal housing policy updates: Key changes ahead",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&q=80",
      href: "#",
    },
    {
      category: "RESIDENTIAL",
      title: "Best property management software for 100-200 units (2026)",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=300&q=80",
      href: "#",
    },
  ],
};

export default function BlogPostsSection() {
  const [hoveredSidebar, setHoveredSidebar] = useState(null);

  return (
    <section
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        backgroundColor: "#ffffff",
        padding: "72px 0 80px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontWeight: 400,
            fontSize: "28px",
            color: "#1a1a1a",
            marginBottom: "48px",
            letterSpacing: "-0.3px",
          }}
        >
          See our latest blog posts
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Featured Post */}
          <a
            href={blogPosts.featured.href}
            style={{ textDecoration: "none", color: "inherit", display: "block" }}
          >
            <div
              style={{
                borderRadius: "4px",
                overflow: "hidden",
                marginBottom: "24px",
                aspectRatio: "4/3",
              }}
            >
              <img
                src={blogPosts.featured.image}
                alt={blogPosts.featured.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </div>

            <span
              style={{
                display: "inline-block",
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                color: "#4a7c2f",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              {blogPosts.featured.category}
            </span>

            <h3
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "26px",
                lineHeight: "1.3",
                color: "#1a1a1a",
                margin: "0 0 16px",
                letterSpacing: "-0.3px",
              }}
            >
              {blogPosts.featured.title}
            </h3>

            {/* Divider */}
            <div
              style={{
                width: "40px",
                height: "3px",
                backgroundColor: "#ffaa0d",
                marginBottom: "16px",
              }}
            />

            <p
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: "14px",
                lineHeight: "1.7",
                color: "#555",
                margin: "0 0 20px",
              }}
            >
              {blogPosts.featured.excerpt}
            </p>

            <span
              style={{
                fontFamily: "'Helvetica Neue', Arial, sans-serif",
                fontSize: "13px",
                fontWeight: 700,
                color: "#1a1a1a",
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              READ MORE
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          </a>

          {/* Sidebar Posts */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {blogPosts.sidebar.map((post, i) => (
              <a
                key={i}
                href={post.href}
                style={{ textDecoration: "none", color: "inherit" }}
                onMouseEnter={() => setHoveredSidebar(i)}
                onMouseLeave={() => setHoveredSidebar(null)}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: "20px",
                    alignItems: "center",
                    padding: "24px 0",
                    borderBottom:
                      i < blogPosts.sidebar.length - 1
                        ? "1px solid #e8e8e8"
                        : "none",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "4px",
                      overflow: "hidden",
                      aspectRatio: "4/3",
                    }}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease",
                        transform:
                          hoveredSidebar === i ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                  </div>

                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        fontFamily: "'Helvetica Neue', Arial, sans-serif",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "1.5px",
                        color: "#4a7c2f",
                        marginBottom: "8px",
                        textTransform: "uppercase",
                      }}
                    >
                      {post.category}
                    </span>

                    <h4
                      style={{
                        fontFamily: "'Helvetica Neue', Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "1.35",
                        color: "#1a1a1a",
                        margin: 0,
                        letterSpacing: "-0.2px",
                        transition: "color 0.2s",
                        ...(hoveredSidebar === i ? { color: "#ffaa0d" } : {}),
                      }}
                    >
                      {post.title}
                    </h4>
                  </div>
                </div>
              </a>
            ))}

            {/* See More Posts Button */}
            <div style={{ marginTop: "28px" }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  backgroundColor: "#ffaa0d",
                  color: "#fff",
                  fontFamily: "'Helvetica Neue', Arial, sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "16px 36px",
                  borderRadius: "40px",
                  transition: "background-color 0.2s, transform 0.15s",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffaa0d";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffaa0d";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                SEE MORE POSTS
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
