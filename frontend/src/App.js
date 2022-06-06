import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Navbar, Landing, LoginPage, Dashboard } from './components/index'
function App() {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
