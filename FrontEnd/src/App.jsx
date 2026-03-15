import { Outlet } from "react-router-dom";
import Header from "./components/Header/";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-wrapper">
        <div className="content-card">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
