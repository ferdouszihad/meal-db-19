import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Loading from "./components/Loading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loading></Loading>}>
      <App />
    </Suspense>
  </StrictMode>
);
