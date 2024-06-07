import {ToastContainer } from "react-toastify";
import RouterConfig from "../core/Navigation/RouterConfig";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
function App() {
  return (
    <>
    <ToastContainer/>
      <RouterConfig/>
    </>

  )
}

export default App