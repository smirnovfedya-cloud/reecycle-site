import React from "react";
import { createRoot } from "react-dom/client";
import Home from "../app/page";
import { AboutPage, ServicePage } from "../app/ServicePages";
import "../app/globals.css";

const segments = window.location.pathname.replace(/\/+$/, "").split("/").filter(Boolean);
const route = segments.at(-1) === "index.html" ? segments.at(-2) || "home" : segments.at(-1) || "home";

function CurrentPage() {
  if (route === "recycling" || route === "consulting" || route === "products") return <ServicePage type={route} />;
  if (route === "about") return <AboutPage />;
  return <Home />;
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrentPage />
  </React.StrictMode>,
);
