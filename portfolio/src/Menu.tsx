// Menu.tsx
import React, { useState } from "react";
import NormalView from "./NormalView";
import SwaggerUI from "swagger-ui-react";
import "./css/menu.css";
import Footer from "./footer";

const urlOpenApi = `${process.env.REACT_APP_API_URL}/openapi`;
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
      <h1>Hello 👋 I'm Grégoire, a Paris-based Back-end Engineer </h1>
      <p>
        As you might've noticed, I'm not really much of a front-end dev... 😳 <br />
        You may use either the UI version 📱 or the API version ⚙️ (with Postman <br />
        or any other HTTP Request engine) to learn about me. You may call <br />
        {process.env.REACT_APP_API_URL} if you're using the swagger API view.
      </p>
      {view === "swagger" && <SwaggerUI url={urlOpenApi} />}
      {view === "normal" && <NormalView />}
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Menu;
