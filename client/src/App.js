
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from './Components/Navbarr';
import Home from './Components/Home';
import Register from './Components/Register';
import { Routes,Route} from "react-router-dom";
import Edit from './Components/Edit';
import Details from './Components/Details';
function App() {
  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
