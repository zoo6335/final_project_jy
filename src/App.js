import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FreeBoard from "./pages/FreeBoard"
import FB_Detail from "./pages/FB_detail"
function App() {
  return (
    // <FreeBoard />
    <FB_Detail />
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<FreeBoard />} /> */}
    //   </Routes>
    // </Router>
  );
}

export default App;
