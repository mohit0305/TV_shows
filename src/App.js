import Home from './Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      
      <div className = "content">
        {/* <Home/> */}
        <Routes>
          <Route path="/" element = {<Home />}>
          </Route>          
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
