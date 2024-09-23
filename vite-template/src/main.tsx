import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthKitProvider } from "@workos-inc/authkit-react";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthKitProvider
      clientId={import.meta.env.VITE_WORKOS_CLIENT_ID}
      apiHostname={import.meta.env.VITE_WORKOS_API_HOSTNAME}
      onRedirectCallback={({ state }) => {
        // TODO: Handle redirect callback
      }}
    >
      <App />
    </AuthKitProvider>
  </StrictMode>
);
