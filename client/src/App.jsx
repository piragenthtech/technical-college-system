import axois from "axios";
function App() {
  const apiCall = () => {
    axois.get("http://localhost:8080/").then((a) => {
      console.log(a);
    });

    axois.get("http://localhost:8080/students").then((e) => {
      console.log(e);
    });
  };
  return <button onClick={apiCall}>Make api call</button>;
}

export default App;
