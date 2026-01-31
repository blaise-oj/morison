import React from "react";
import "./PageLayout.css";

const PageLayout = ({
  title,
  subtitle,
  image,
  breadcrumbs,
  cta,
  children,
}) => {
  return (
    <main className="page-layout">
      {/* HERO */}
      <header
        className={`page-hero ${image ? "has-image" : ""}`}
        style={
          image
            ? {
                backgroundImage: `linear-gradient(
                  rgba(8, 0, 58, 0.65),
                  rgba(8, 0, 58, 0.65)
                ), url(${image})`,
              }
            : undefined
        }
      >
        <div className="page-hero-inner">
          {breadcrumbs && (
            <nav className="breadcrumbs">
              {breadcrumbs}
            </nav>
          )}

          <h1 className="page-title">{title}</h1>

          {subtitle && (
            <p className="page-subtitle">{subtitle}</p>
          )}

          {cta && (
            <div className="hero-cta">
              {cta}
            </div>
          )}
        </div>
      </header>

      {/* CONTENT */}
      <section className="page-content">
        <div className="page-content-inner">
          {children}
        </div>
      </section>
    </main>
  );
};

export default PageLayout;

