console.log('ENTRY_BUILD_MARKER_MAIN_TSX - ' + new Date().toISOString());

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Consolidated styles
import "./styles/design-tokens.css";
import "./styles/base.css";
import "./styles/animations.css";
createRoot(document.getElementById("root")!).render(<App />);

