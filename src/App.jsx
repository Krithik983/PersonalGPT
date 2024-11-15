import "./App.css";
import Chatbox from "./components/Chatbox";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="chatbox">
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
