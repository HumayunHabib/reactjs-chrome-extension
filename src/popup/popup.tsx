import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/tailwind.css";

const test = (
  <div>
    <h1 className="text-4xl text-green-500">hello World</h1>
    <img src="banner.jpg" alt="" />
  </div>
);

const container = document.createElement("div");

document.body.appendChild(container);
const root = createRoot(container);
root.render(test);
