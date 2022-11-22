import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FreeBoard from "./pages/FreeBoard"
function App() {
  return (
    <FreeBoard />
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<FreeBoard />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
