import "./App.css"
import { Dashboard } from "./features/dashboard/Dashboard"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import useInternetConnection from "./hooks/useInternetConnection"

function App() {
  useInternetConnection()
  return (
    <div className="App">
      <Dashboard />
      <ToastContainer />
    </div>
  )
}

export default App
