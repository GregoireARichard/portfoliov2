// Menu.tsx
import React, { useState } from "react";
import NormalView from "./NormalView";
import SwaggerUI from "swagger-ui-react";
import "./css/menu.css";

const Menu: React.FC = () => {
  const [view, setView] = useState<"swagger" | "normal">("normal");

  const handleViewChange = (newView: "swagger" | "normal") => {
    setView(newView);
  };

  return (
    <div className="menu-container">
      <button
        className="menu-button"
        onClick={() => handleViewChange("swagger")}
      >
        See the API Swagger
      </button>
      <button
        className="menu-button"
        onClick={() => handleViewChange("normal")}
      >
        See the Normal UI
      </button>
      <h1>Hello 👋 I'm Grégoire, a Paris-based Back-end Engineer</h1>
      <p>As you might've noticed, I'm really not much of a front-end dev 😳 </p>
      <p>You may use either the UI version or the API version (with Postman or any other HTTP Request engine) to learn about me </p>
      {view === "swagger" && <SwaggerUI url="http://localhost:8000/openapi" />}
      {view === "normal" && <NormalView />}
    </div>
  );
};

export default Menu;
