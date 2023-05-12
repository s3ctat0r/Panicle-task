
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Form from './Components/Pages/Form';
import Table from './Components/Pages/Table';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
