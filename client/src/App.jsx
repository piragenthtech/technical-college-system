import axois from "axios";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
// import NavBar from "./components/NavBar";

function App() {
  const apiCall = () => {
    axois.get("http://localhost:8080/").then((a) => {
      console.log(a);
    });

    axois.get("http://localhost:8080/students").then((e) => {
      console.log(e);
    });
  };
  return (
    <>
      <Header />
      {/* <NavBar />  */}
      <Routes>{/* <Route path="/" element={} /> */}</Routes>
      <button onClick={apiCall}>Make api call</button>
    </>
  );
}

export default App;
