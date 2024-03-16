import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import './App.css';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/" element={<Landing/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
