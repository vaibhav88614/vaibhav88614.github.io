console.log('ENTRY_BUILD_MARKER_MAIN_TSX - ' + new Date().toISOString());

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Consolidated styles
import "./styles/index.css";
createRoot(document.getElementById("root")!).render(<App />);

