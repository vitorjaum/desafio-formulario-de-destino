import "./App.css";
import DestinyForm from "./containers/DestinyForm/DestinyForm";
import DataForm from "./containers/DataForm/DataForm";

function App() {
  return (
    <div className="App">
      <section className="forms">
        <DataForm />
        <DestinyForm />
      </section>
      <button className="btn">Enviar</button>
    </div>
  );
}

export default App;
