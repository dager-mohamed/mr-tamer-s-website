import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Navbar, Landing, LoginPage, Dashboard, HomeWork, Exercise } from './components/index'
function App() {
  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboard/homework" element={<HomeWork/>} />
        <Route path="/dashboard/exercise" element={<Exercise/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
