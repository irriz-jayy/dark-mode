import { ToastContainer } from "react-toastify";
import "./App.css";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Landingpage />
    </div>
  );
}

export default App;
