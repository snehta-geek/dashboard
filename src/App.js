
import './App.css';
import Dashboard from './components/dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from './Store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Dashboard/>
      </Provider>
     
      <ToastContainer />
    </div>
  );
}

export default App;
