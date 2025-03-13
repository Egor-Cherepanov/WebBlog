// import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import Blog from "./App.tsx"
import "./index.scss"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Blog />
  </BrowserRouter>
)
