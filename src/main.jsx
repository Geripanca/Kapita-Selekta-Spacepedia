import React from "react";
import ReactDOM from "react-dom/client";
import Landingpage from "./Landingpage.jsx";
import "./index.css";
import Materi from "./materi.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizApp from "./components/quiz/quizapp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landingpage />,
  },
  {
    path: "/beranda",
    element: <Landingpage />,
  },
  {
    path: "/materi",
    element: <Materi />,
  },
  {
    path: "/kuis",
    element: <QuizApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
