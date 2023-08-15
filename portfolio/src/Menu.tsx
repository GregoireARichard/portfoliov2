// Menu.tsx
import React, { useState } from "react";
import NormalView from "./NormalView";
import SwaggerUI from "swagger-ui-react";
import "./menu.css";

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
        View Swagger
      </button>
      <button
        className="menu-button"
        onClick={() => handleViewChange("normal")}
      >
        View Normal UI
      </button>
      <p>As you might've noticed, I'm really not much of a front-end dev 😳 </p>
      {view === "swagger" && <SwaggerUI url="http://localhost:8000/openapi" />}
      {view === "normal" && <NormalView />}
    </div>
  );
};

export default Menu;
