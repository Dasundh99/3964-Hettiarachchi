import './styles.css';
import Header from './Components/Header';
import AddUser from './Components/AddUser';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from './Components/About';
/*import GameList from './Components/GameList';*/
/*import AddGame from './Components/AddGame';*/
import Home from './Components/Home';
import AddGameAndList from './Components/AddGameAndList';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addgame" element={<AddGameAndList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
