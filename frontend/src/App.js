import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';


function App() {
  return (
	  <div className="App">
      <header className="App-header">
        <h1>Basic MERN App</h1>
        <UserList />
      </header>
    </div>
  );
}

export default App;
