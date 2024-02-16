import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Login } from "./components/Login";
import { Student } from "./components/Student";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Navbar />
      <Student />
    </div>
  );
}

export default App;
