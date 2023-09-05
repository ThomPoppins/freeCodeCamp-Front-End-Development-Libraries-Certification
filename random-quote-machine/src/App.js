import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import Quote from "./components/Quote.js";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Quote />
      </div>
    </Provider>
  );
}

export default App;
