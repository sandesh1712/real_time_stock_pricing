import { Provider } from 'react-redux';
import './App.css';
import { Home } from './components/Home/Home';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Home/>
      </Provider>
    </div>
  );
}

export default App;
