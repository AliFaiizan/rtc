import { Provider } from "react-redux";
import { store } from "./states";
import RepositoriesList from "./components/RepositoriesList";	


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
    <h1>Search for a package</h1>
      </header>
    <RepositoriesList />
    </div>

    </Provider>
  ); 
}

export default App;
