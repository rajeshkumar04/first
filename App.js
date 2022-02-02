import logo from './logo.svg';
import React,{useState , createContext} from "react"
import './App.css';
import NavBar from './Components/NavBar';
import Register from './Components/Register';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import ExamPage from './Components/ExamPage';

export const store = createContext();
function App() {
  const [token , setToken]=useState(null)

  return (
    <div className="App">
      <store.Provider value={[token, setToken]}>
       <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/exampage" component={ExamPage}/>
          </Switch>
       </BrowserRouter>
       </store.Provider>
    </div>
  );
}

export default App;
