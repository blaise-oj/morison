import React from "react";
import "./PageLayout.css";
import "./SubpageStyles.css";

const PageLayout = ({
  title,
  subtitle,
  breadcrumbs,
  cta,
  children,
  headerClass = "",
}) => {
  return (
    <main className="page-layout">
      {/* Optional header section */}
      {(title || subtitle || cta) && (
        <header className={`page-header ${headerClass}`}>
          <div className="page-header-inner">
            {breadcrumbs && <nav className="page-breadcrumbs">{breadcrumbs}</nav>}
            {title && <h1 className="page-title">{title}</h1>}
            {subtitle && <p className="page-subtitle">{subtitle}</p>}
            {cta && <div className="page-cta">{cta}</div>}
          </div>
        </header>
      )}

      {/* CONTENT */}
      <section className="page-content">
        <div className="page-content-inner">{children}</div>
      </section>
    </main>
  );
};

export default PageLayout;

