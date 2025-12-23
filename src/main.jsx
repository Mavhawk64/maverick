import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import FollowersApp from "./FollowersApp";
import reportWebVitals from "./reportWebVitals";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);

createRoot(document.getElementById("followers")).render(
    <StrictMode>
        <FollowersApp />
    </StrictMode>
);

reportWebVitals();
