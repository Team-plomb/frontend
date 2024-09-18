import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faq from "./pages/Faq.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Polls from "./pages/Polls.jsx";
import Votes from "./pages/Votes.jsx";
import { Results } from "./pages/Results.jsx";
import Admin from "./pages/Admin.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Faq",
    element: <Faq />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <ContactUs />,
  },
  {
    path: "/Polls",
    element: <Polls />,
  },
  {
    path: "/Votes",
    element: <Votes />,
  },
  {
    path: "/Results",
    element: <Results />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
