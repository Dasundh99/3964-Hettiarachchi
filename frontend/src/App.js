import './styles.css';
import Header from './Components/Header';
import AddUser from './Components/AddUser';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from './Components/About';
import GameList from './Components/GameList';
import Home from './Components/Home';
import AddGameAndList from './Components/AddGameAndList';
import EditContent from './Components/EditContent';
import GameSearch from './Components/Search';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<AddUser />} />
        <Route path="/login"  exact element={<Login />} />
        <Route path="/addgame" exact element={<AddGameAndList />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/editcontent" exact element={<EditContent/>}/>
        <Route path="/search" exact element={<GameSearch />} />
        <Route path="/gamelist" exact element={<GameList/>} />


      </Routes>
    </Router>
  );
}

export default App;
